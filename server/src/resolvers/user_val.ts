import { Query, Resolver, Arg, Int, Mutation, InputType, Field} from 'type-graphql';
import { Item } from "../entities/Item";
import {getConnection, getManager} from "typeorm";
import { User } from '../entities/User';
import { Chat } from '../entities/Chat';



@InputType()
class UserCreateInput {
  @Field()
  email!: string;
}

//Define types for update queries.

@Resolver()
export class UserResolver {

  @Mutation(() => User)
  async createUser (
    @Arg('options') options: UserCreateInput,
  ): Promise<User> {
    const entityManager = getManager();
    const newUser = entityManager.create(User, options);
    await entityManager.save(newUser);
    return newUser;
  }

  //This function takes an options object. You need to pass an id for the user to update 
  //and a key for the property to update.

  @Query(() => User, { nullable: true }) 
  getUser(
    @Arg('id', () => Int) id: number
  ): Promise<User| undefined> {
    return User.findOne(id);
  }

}

