"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const constants_1 = require("./constants");
const typeorm_1 = require("typeorm");
const Hello_1 = require("./resolvers/Hello");
const cors = require('cors');
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
app.use(cors({
    origin: '*',
    credentials: true
}));
(async function () {
    const conn = await (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "heaps",
        logging: true,
        synchronize: true,
        username: constants_1.postgresU,
        password: constants_1.postgresP,
        entities: [],
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [Hello_1.HelloResolver],
            validate: false
        }),
    });
    try {
        await apolloServer.start();
        apolloServer.applyMiddleware({
            app,
            cors: false
        });
        app.listen(PORT, () => {
            console.log('listening on port: ', PORT);
        });
    }
    catch (err) {
        console.error(err);
    }
})();
//# sourceMappingURL=index.js.map