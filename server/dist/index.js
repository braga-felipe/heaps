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
const cors_1 = __importDefault(require("cors"));
const item_1 = require("./resolvers/item");
const Item_1 = require("./entities/Item");
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
(async function () {
    await (0, typeorm_1.createConnection)({
        type: "postgres",
        database: "heaps",
        logging: true,
        synchronize: true,
        username: constants_1.postgresU,
        password: constants_1.postgresP,
        entities: [Item_1.Item],
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [item_1.ItemResolver],
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