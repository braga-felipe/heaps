import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
// import { __prod__ } from './constants';
import { createConnection } from 'typeorm';
import 'dotenv/config';

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

const session = require('express-session');
const app = express();
const PORT = 4000;

const corsOptions = {
  credentials: true,
  origin: true,
  allowedHeaders: ['Content-Type', 'Access-Control-Allow-Origin'],
  methods: ['GET, HEAD, PUT, PATCH, POST, DELETE'],
  preflightContinue: false,
  optionSuccessStatus: 200,
};

app.use(express.json());
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
    secret: process.env.SECRET_KEY,
    resave: false,
  })
);

(async function () {
  //typeORM connection to POSTGRES
  await createConnection({
    url: process.env.DB_URL,
    type: 'postgres',

    logging: true,
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },

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
      cors: corsOptions,
    });
    app.listen(PORT, () => {
      console.log('listening on port: ', PORT);
    });
  } catch (err) {
    console.error(err);
  }
})();
