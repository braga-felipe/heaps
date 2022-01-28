import "reflect-metadata";
import express from "express";
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { postgresP, postgresU, __prod__ } from "./constants";
import { createConnection } from "typeorm";
import cors from "cors";
//Resolver Imports for Graphql
import { ItemResolver } from "./resolvers/item";
import { Item } from "./entities/Item";

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
  await createConnection({
    type: "postgres",
    database: "heaps",
    logging: true,
    synchronize: true,
    username: postgresU,
    password: postgresP,
    //TODO: Add entities to array
    entities: [Item],
  });

  //ApolloServer Setup and Schema Build
  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      // Add resolvers in array
      resolvers: [ItemResolver],
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

