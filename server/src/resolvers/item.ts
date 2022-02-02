import { Query, Resolver, Arg, Int, Mutation, InputType, Field, registerEnumType } from 'type-graphql';
import { Item } from "../entities/Item";
import { getManager} from "typeorm";
import { User } from '../entities/User';


//Enums allow us to type-set the inputs for the Allergies and Diets properties on Items we are creating
export enum Allergies {
  glutenFree = "glutenFree",
  lactoseFree = "lactoseFree",
  nutFree = "nutFree"
 }
 export enum Diets {
  vegetarian = "vegetarian",
  vegan = "vegan",
  pescatarian = "pescatarian"
 }

 //We can't accept an item where the values for allergies/diets are not in the defined enums.
 registerEnumType(Allergies, {name: "Allergies"});
 registerEnumType(Diets, {name: "Diets"});

//Define the types for Item inputs
@InputType()
class ItemCreateInput {
  @Field()
  name: string;
  @Field()
  description: string;
  @Field()
  servings: number;
  @Field()
  isGroceries: boolean;
  @Field()
  ownerId: number;
  @Field(() => [Allergies])
  allergies?: Allergies[];
  @Field(() => [Diets])
  diets?: Diets[];
}


//Possible fields we can update with update query
@InputType()
class ItemUpdateOptions {
  @Field({nullable: true})
  complete?: boolean;

  @Field({nullable: true})
  archive?: boolean;

  @Field({nullable: true})
  SICK_points?: number;

  @Field({nullable: true})
  servings?: number;
}

//Define types for update queries.
@InputType()
class ItemUpdateInput {
  @Field(() => Int)
  id: number;
  @Field(() => ItemUpdateOptions)
  updateOptions: ItemUpdateOptions;
}

@Resolver()
export class ItemResolver {
  @Query(() => Item, { nullable: true })
  getItem(
    @Arg('id', () => Int) id: number
  ): Promise<Item | undefined> {
    return Item.findOne(id, {relations: ['chats']});
  }

  @Query(() => [Item], { nullable: true })
  async getAllItems(): Promise<Item[] | undefined> {
    const allItems = await Item.find();
    return allItems;
  }

  @Mutation(() => Item)
  async createItem (
    //The potential fields we can update ("options") are defined in ItemUpdateInput type def.
    @Arg('options') options: ItemCreateInput
  ): Promise<Item> {
    const entityManager = getManager();
    const user = await User.findOneOrFail(options.ownerId, { relations: ['items_owned']});
    const item = await entityManager
                        .create(Item, { ...options, owner: user})
                        .save();
    return item;
  }

  //This function takes an options object. You need to pass an id for the item to update
  //and a key for the property to update.
  @Mutation(() => Item)
  async updateItem (
    //The potential fields we can update ("options") are defined in ItemUpdateInput type def.
    @Arg('options') options: ItemUpdateInput
  ): Promise<Item> {
    const entityManager = getManager();
    if (options.updateOptions !== {}) {
      // executes UPDATE user SET {options} WHERE id = options.id
      await entityManager.update(Item, options.id, options.updateOptions);
    }
    const updatedItem = entityManager.findOneOrFail(Item, options.id);
    return updatedItem;
  }



}


