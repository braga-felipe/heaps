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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Item_1 = require("./Item");
const Message_1 = require("./Message");
const User_1 = require("./User");
let Chat = class Chat extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Chat.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Chat.prototype, "userOwnerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [User_1.User]),
    (0, typeorm_1.ManyToMany)(() => User_1.User, (user) => user.chats, { eager: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Promise)
], Chat.prototype, "users", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Chat.prototype, "itemOwnerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => Item_1.Item),
    (0, typeorm_1.ManyToOne)(() => Item_1.Item, (item) => item.chats, { eager: true }),
    __metadata("design:type", Promise)
], Chat.prototype, "item", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Message_1.Message], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Message_1.Message, (message) => message.chat, { eager: true }),
    __metadata("design:type", Array)
], Chat.prototype, "messages", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Chat.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Chat.prototype, "updatedAt", void 0);
Chat = __decorate([
    (0, type_graphql_1.ObjectType)(),
    (0, type_graphql_1.InputType)(),
    (0, typeorm_1.Entity)()
], Chat);
exports.Chat = Chat;
//# sourceMappingURL=Chat.js.map