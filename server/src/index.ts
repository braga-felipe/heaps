import "reflect-metadata";
import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { postgresP, postgresU, __prod__ } from "./constants";
import { createConnection } from "typeorm";
import { HelloResolver } from "./resolvers/Hello";

const cors = require('cors');
const app = express();
const PORT = 4000;


app.use(express.json());
app.use(
  cors({
    origin: '*',
    credentials: true
  })
);

(async function () {
  //typeORM connection to POSTGRES
  const conn = await createConnection({
    type: "postgres",
    database: "heaps",
    logging: true,
    synchronize: true,
    username: postgresU,
    password: postgresP,
    //TODO: Add entities to array
    entities: [],
  });

  //ApolloServer Setup and Schema Build
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      //TODO: Add resolvers in array
      resolvers: [HelloResolver],
      validate: false
    }),
  });

  //Start server and apply middleware to ApolloServer
  try {
    await apolloServer.start();
    apolloServer.applyMiddleware({
      app,
      cors: false
    }); 
    app.listen(PORT, () => {
    console.log('listening on port: ', PORT);
  })} catch (err) {
    console.error(err);
  }
})();

