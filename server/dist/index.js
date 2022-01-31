"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const cors_1 = __importDefault(require("cors"));
const item_1 = require("./resolvers/item");
const Item_1 = require("./entities/Item");
const User_1 = require("./entities/User");
const Chat_1 = require("./entities/Chat");
const Message_1 = require("./entities/Message");
const User_2 = require("./resolvers/User");
const chat_1 = require("./resolvers/chat");
const message_1 = require("./resolvers/message");
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: '*',
    credentials: true
}));
(async function () {
    await (0, typeorm_1.createConnection)({
        url: "postgres://tnsynagdhfeeoz:8f3fffa7c6b9427f6b1c7ccea5c00e92d246f7c57a8c6e4c898ff090f93c0975@ec2-54-220-166-184.eu-west-1.compute.amazonaws.com:5432/ddkbj1b88gtcq8",
        type: "postgres",
        logging: true,
        synchronize: true,
        ssl: {
            rejectUnauthorized: false,
        },
        entities: [Item_1.Item, User_1.User, Chat_1.Chat, Message_1.Message],
    });
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [item_1.ItemResolver, User_2.UserResolver, chat_1.ChatResolver, message_1.MessageResolver],
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