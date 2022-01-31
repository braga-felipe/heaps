import { Query, Resolver, Arg, Int, Mutation, InputType, Field, Args, } from 'type-graphql';
import { User } from '../entities/User';
import {getManager} from "typeorm";
import * as argon2 from "argon2";

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
  };

  @Query(() => User)
  getOneUserByID(
    @Arg('id',() => Int) id: number)  {
      return User.findOne( { where: { id } });
    };

  @Mutation(() => User)
  async createUser (
    @Arg('options') options: CreateUserInput,
    ): Promise<User> {
      const hashedPassword = await argon2.hash(options.password);
      const entityManager = getManager();
      const newUser = entityManager.create(User, options);
      await entityManager.save(newUser);
      return newUser;
    };

  // @Mutation(() => User)
  // async createUser(
  //   @Arg('userData') userData: CreateUserInput): Promise<User> {
  //     const user = await User.create(userData);
  //     await user.save();
  //     return user;
  //   };

    @Mutation(() => User)
    async registerUser(
      @Args('options') options: UsernamePasswordInput
    ) {
      const hashedPassword = await argon2.hash(options.password);
      const uer = User.create
    }

}

