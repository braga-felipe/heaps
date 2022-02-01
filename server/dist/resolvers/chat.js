"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Item_1 = require("../entities/Item");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
const Chat_1 = require("../entities/Chat");
let ChatCreateInput = class ChatCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ChatCreateInput.prototype, "userOwnerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ChatCreateInput.prototype, "userRequesterId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ChatCreateInput.prototype, "itemOwnerId", void 0);
ChatCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], ChatCreateInput);
let ChatResolver = class ChatResolver {
    getChat(id) {
        return Chat_1.Chat.findOne(id, { relations: ["users", "messages", "item"] });
    }
    async createChat(options) {
        const entityManager = (0, typeorm_1.getManager)();
        const user1 = await User_1.User.findOneOrFail(options.userOwnerId, { relations: ["chats"] });
        const user2 = await User_1.User.findOneOrFail(options.userRequesterId, { relations: ["chats"] });
        const item = await entityManager.findOneOrFail(Item_1.Item, options.itemOwnerId, { relations: ["chats"] });
        const chat = await entityManager
            .create(Chat_1.Chat, Object.assign(Object.assign({}, options), { users: [user1, user2], item: item }))
            .save();
        return chat;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Chat_1.Chat, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "getChat", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Chat_1.Chat),
    __param(0, (0, type_graphql_1.Arg)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ChatCreateInput]),
    __metadata("design:returntype", Promise)
], ChatResolver.prototype, "createChat", null);
ChatResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ChatResolver);
exports.ChatResolver = ChatResolver;
//# sourceMappingURL=chat.js.map