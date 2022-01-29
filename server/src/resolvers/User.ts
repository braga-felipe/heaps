import { Query, Resolver, Arg, Int, Mutation, InputType, Field, registerEnumType } from 'type-graphql';
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

@Resolver()
export class UserResolver {
  @Query(() => [User])
  getAllUsers() {
    return User.find()
  }

  @Mutation(() => User)
  async getOneUserByID(
    @Arg('id',()=> Int) id: number) {
      await user = 
    }


  @Mutation(() => User)
  async createUser(
    @Arg('userData') userData: CreateUserInput) {
      const user = await User.create(userData);
      await user.save();
      return user;
    }


}