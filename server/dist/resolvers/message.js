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
exports.MessageResolver = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Message_1 = require("../entities/Message");
const Chat_1 = require("../entities/Chat");
let MessageCreateInput = class MessageCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], MessageCreateInput.prototype, "text", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], MessageCreateInput.prototype, "chatId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], MessageCreateInput.prototype, "currentUserId", void 0);
MessageCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], MessageCreateInput);
let MessageResolver = class MessageResolver {
    async createMessage(options) {
        const entityManager = (0, typeorm_1.getManager)();
        const chat = await Chat_1.Chat.findOneOrFail(options.chatId, { relations: ['messages'] });
        const message = await entityManager
            .create(Message_1.Message, Object.assign(Object.assign({}, options), { chat: chat, authorId: options.currentUserId }))
            .save();
        return message;
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Message_1.Message),
    __param(0, (0, type_graphql_1.Arg)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MessageCreateInput]),
    __metadata("design:returntype", Promise)
], MessageResolver.prototype, "createMessage", null);
MessageResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], MessageResolver);
exports.MessageResolver = MessageResolver;
//# sourceMappingURL=message.js.map