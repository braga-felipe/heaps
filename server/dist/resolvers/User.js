"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entities/User");
const argon2 = __importStar(require("argon2"));
const types_1 = require("../types");
let CreateUserInput = class CreateUserInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "username", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], CreateUserInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "address", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], CreateUserInput.prototype, "zipCode", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreateUserInput.prototype, "img_url", void 0);
CreateUserInput = __decorate([
    (0, type_graphql_1.InputType)()
], CreateUserInput);
let UserLoginInput = class UserLoginInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], UserLoginInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserLoginInput.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserLoginInput.prototype, "password", void 0);
UserLoginInput = __decorate([
    (0, type_graphql_1.InputType)()
], UserLoginInput);
let FieldError = class FieldError {
};
__decorate([
    (0, type_graphql_1.Field)(() => String),
    __metadata("design:type", String)
], FieldError.prototype, "field", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], FieldError.prototype, "message", void 0);
FieldError = __decorate([
    (0, type_graphql_1.ObjectType)()
], FieldError);
let UserResponse = class UserResponse {
};
__decorate([
    (0, type_graphql_1.Field)(() => [FieldError], { nullable: true }),
    __metadata("design:type", Array)
], UserResponse.prototype, "errors", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => User_1.User, { nullable: true }),
    __metadata("design:type", User_1.User)
], UserResponse.prototype, "user", void 0);
UserResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], UserResponse);
let UserResolver = class UserResolver {
    async getAllUsers() {
        const allUser = await User_1.User.find();
        return allUser;
    }
    async getOneUserByID(id) {
        const user = await User_1.User.findOneOrFail(id, {
            relations: ["items_owned", "chats"],
        });
        return user;
    }
    async createUser(options, { req }) {
        if (!options.username) {
            return {
                errors: [
                    {
                        field: "username",
                        message: "Please enter a valid name.",
                    },
                ],
            };
        }
        if (options.password.length < 8) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Password must be at least 8 characters.",
                    },
                ],
            };
        }
        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!options.email.match(emailFormat)) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "Please enter a valid email address.",
                    },
                ],
            };
        }
        const hashedPassword = await argon2.hash(options.password);
        let user = undefined;
        try {
            const checkUser = await User_1.User.findOne({ email: options.email });
            if (checkUser) {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Email already in use."
                        }
                    ]
                };
            }
            user = await User_1.User.create({
                username: options.username,
                password: hashedPassword,
                email: options.email,
                address: options.address,
                zipCode: options.zipCode,
                img_url: options.img_url,
            }).save();
        }
        catch (err) {
            if (err) {
                console.log(err);
                return {
                    errors: [
                        {
                            field: "email",
                            message: "Please enter a different email address.",
                        },
                    ],
                };
            }
        }
        req.session.userId = user === null || user === void 0 ? void 0 : user.id;
        return { user };
    }
    async userLogin(options, { req }) {
        const user = await User_1.User.findOne({ email: options.email });
        if (!user) {
            return {
                errors: [
                    {
                        field: "email",
                        message: "Email and password combination does not match."
                    }
                ]
            };
        }
        const validPasswordCheck = await argon2.verify(options.email, options.password);
        if (!validPasswordCheck) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Password and password combination does not match."
                    }
                ]
            };
        }
        req.session.userId = user.id;
        return { user };
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllUsers", null);
__decorate([
    (0, type_graphql_1.Query)(() => User_1.User),
    __param(0, (0, type_graphql_1.Arg)("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getOneUserByID", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)("options")),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateUserInput, typeof (_a = typeof types_1.MyContext !== "undefined" && types_1.MyContext) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => UserResponse),
    __param(0, (0, type_graphql_1.Arg)('options')),
    __param(1, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserLoginInput, typeof (_b = typeof types_1.MyContext !== "undefined" && types_1.MyContext) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "userLogin", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=User.js.map