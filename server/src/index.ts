import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { __prod__ } from './constants';
import { createConnection } from 'typeorm';
import cors from 'cors';
//Resolver Imports for Graphql
import { ItemResolver } from './resolvers/item';
import { Item } from './entities/Item';
import { User } from './entities/User';
import { Chat } from './entities/Chat';
import { Message } from './entities/Message';
import { UserResolver } from './resolvers/User';
import { ChatResolver } from './resolvers/chat';
import { MessageResolver } from './resolvers/message';
import { MyContext } from './types';

//TODO: Update DB to redis store
// const connectRedis = require('connect-redis');
// const redis = require('redis');

const session = require('express-session');

const app = express();
const PORT = 4000;

// const redisClient = redis.createClient()
// const RedisStore = connectRedis(session)

app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(
  session({
    name: 'qid',
    cookie: {
      maxAge: 10000000,
      httpOnly: true,
      secure: false,
      sameSite: false,
    },
    saveUninitialized: false,
    secret: 'qiwroasdjlasddde',
    resave: false,
  })
);

(async function () {
  //typeORM connection to POSTGRES
  await createConnection({
    url: 'postgres://cqdwlaycgnlihe:5a485120a790b97466abe4032ae3976c7ee7834b87f3975d5bd3919745f197ff@ec2-3-227-15-75.compute-1.amazonaws.com:5432/d9917k0abiuhik',
    type: 'postgres',
    logging: true,
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },

    //TODO: Add entities to array
    entities: [Item, User, Chat, Message],
  });

  //ApolloServer Setup and Schema Build
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      // Add resolvers in array
      resolvers: [ItemResolver, UserResolver, ChatResolver, MessageResolver],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({
      req,

      res,
    }),
  });

  //Start server and apply middleware to ApolloServer
  try {
    await apolloServer.start();
    apolloServer.applyMiddleware({
      app,
      cors: false,
    });
    app.listen(PORT, () => {
      console.log('listening on port: ', PORT);
    });
  } catch (err) {
    console.error(err);
  }
})();
