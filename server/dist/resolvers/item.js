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
exports.ItemResolver = exports.Diets = exports.Allergies = void 0;
const type_graphql_1 = require("type-graphql");
const Item_1 = require("../entities/Item");
const typeorm_1 = require("typeorm");
const User_1 = require("../entities/User");
var Allergies;
(function (Allergies) {
    Allergies[Allergies["glutenFree"] = 0] = "glutenFree";
    Allergies[Allergies["lactoseFree"] = 1] = "lactoseFree";
    Allergies[Allergies["nutFree"] = 2] = "nutFree";
})(Allergies = exports.Allergies || (exports.Allergies = {}));
var Diets;
(function (Diets) {
    Diets[Diets["vegetarian"] = 0] = "vegetarian";
    Diets[Diets["vegan"] = 1] = "vegan";
    Diets[Diets["pescatarian"] = 2] = "pescatarian";
})(Diets = exports.Diets || (exports.Diets = {}));
(0, type_graphql_1.registerEnumType)(Allergies, { name: "Allergies" });
(0, type_graphql_1.registerEnumType)(Diets, { name: "Diets" });
let ItemCreateInput = class ItemCreateInput {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ItemCreateInput.prototype, "name", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], ItemCreateInput.prototype, "description", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ItemCreateInput.prototype, "servings", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Boolean)
], ItemCreateInput.prototype, "isGroceries", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], ItemCreateInput.prototype, "ownerId", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Allergies]),
    __metadata("design:type", Array)
], ItemCreateInput.prototype, "allergies", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Diets]),
    __metadata("design:type", Array)
], ItemCreateInput.prototype, "diets", void 0);
ItemCreateInput = __decorate([
    (0, type_graphql_1.InputType)()
], ItemCreateInput);
let ItemUpdateOptions = class ItemUpdateOptions {
};
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ItemUpdateOptions.prototype, "complete", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Boolean)
], ItemUpdateOptions.prototype, "archive", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ItemUpdateOptions.prototype, "SICK_points", void 0);
__decorate([
    (0, type_graphql_1.Field)({ nullable: true }),
    __metadata("design:type", Number)
], ItemUpdateOptions.prototype, "servings", void 0);
ItemUpdateOptions = __decorate([
    (0, type_graphql_1.InputType)()
], ItemUpdateOptions);
let ItemUpdateInput = class ItemUpdateInput {
};
__decorate([
    (0, type_graphql_1.Field)(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ItemUpdateInput.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => ItemUpdateOptions),
    __metadata("design:type", ItemUpdateOptions)
], ItemUpdateInput.prototype, "updateOptions", void 0);
ItemUpdateInput = __decorate([
    (0, type_graphql_1.InputType)()
], ItemUpdateInput);
let ItemResolver = class ItemResolver {
    getItem(id) {
        return Item_1.Item.findOne(id);
    }
    async createItem(options) {
        const entityManager = (0, typeorm_1.getManager)();
        const user = await User_1.User.findOneOrFail(options.ownerId, { relations: ['items_owned'] });
        const item = await entityManager
            .create(Item_1.Item, Object.assign(Object.assign({}, options), { owner: user }))
            .save();
        return item;
    }
    async updateItem(options) {
        const entityManager = (0, typeorm_1.getManager)();
        if (options.updateOptions !== {}) {
            await entityManager.update(Item_1.Item, options.id, options.updateOptions);
        }
        const updatedItem = entityManager.findOneOrFail(Item_1.Item, options.id);
        return updatedItem;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => Item_1.Item, { nullable: true }),
    __param(0, (0, type_graphql_1.Arg)('id', () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "getItem", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Item_1.Item),
    __param(0, (0, type_graphql_1.Arg)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemCreateInput]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "createItem", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Item_1.Item),
    __param(0, (0, type_graphql_1.Arg)('options')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ItemUpdateInput]),
    __metadata("design:returntype", Promise)
], ItemResolver.prototype, "updateItem", null);
ItemResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], ItemResolver);
exports.ItemResolver = ItemResolver;
//# sourceMappingURL=item.js.map