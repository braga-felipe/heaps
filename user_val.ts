import { Query, Resolver, Arg, Int, Mutation, InputType, Field} from 'type-graphql';
import { getManager} from "typeorm";
import { User } from '../entities/User';



@InputType()
class CreateUserInput {
  @Field(() => String)
  username: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field(() => String)
  address: string;
  @Field(() => String)
  zipCode: string;
  @Field({ nullable: true })
  img_url?: string;
}
//Define types for update queries.

@Resolver()
export class UserResolver {

  @Mutation(() => User)
  async createUser (
    @Arg('options') options: CreateUserInput,
  ): Promise<User> {
    const entityManager = getManager();
    const newUser = entityManager.create(User, options);
    await entityManager.save(newUser);
    return newUser;
  }

  //This function takes an options object. You need to pass an id for the user to update
  //and a key for the property to update.

  @Query(() => User, { nullable: true })
  async getUser(
    @Arg('id', () => Int) id: number
  ): Promise<User| undefined> {
    const user = await User.findOne(id, { relations: ['items_owned', 'chats']});
    return user;
  }
}

