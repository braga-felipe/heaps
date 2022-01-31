import {
  Query,
  Resolver,
  Arg,
  Int,
  Mutation,
  InputType,
  Field,
  ObjectType,
  Ctx,
} from "type-graphql";
import { User } from "../entities/User";
// import {getManager} from "typeorm";
import * as argon2 from "argon2";

@InputType()
class CreateUserInput {
  @Field(() => String)
  username: string;

  @Field()
  password: string;

  @Field()
  email: string;

  @Field(() => String)
  address: string;

  @Field(() => String)
  zipCode: string;

  @Field({ nullable: true })
  img_url?: string;
}

@ObjectType()
class FieldError {
  @Field(() => String)
  field: string;

  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];

  @Field(() => User, { nullable: true })
  newUser?: User;
}


@Resolver()
export class UserResolver {
  @Query(() => [User])
  async getAllUsers() {
    const allUser = await User.find();
    return allUser;
  }

  @Query(() => User)
  async getOneUserByID(@Arg("id", () => Int) id: number) {
    const user = await User.findOne(id, {
      relations: ["items_owned", "chats"],
    });
    return user;
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("options") options: CreateUserInput
  ): Promise<UserResponse> {
    if (options.username.length < 6) {
      return {
        errors: [
          {
            field: "username",
            message: "Username must be at least 6 characters.",
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
    const hashedPassword = await argon2.hash(options.password);
    let newUser: User | undefined = undefined;
    try {
      newUser = await User.create({
        username: options.username,
        password: hashedPassword,
        email: options.email,
        address: options.address,
        zipCode: options.zipCode,
        img_url: options.img_url,
      }).save();
    } catch (err) {
      if (err.errno === 19) {
        return {
          errors: [
            {
              field: "username",
              message: "Username has already been taken.",
            },
          ],
        };
      }
    }
    return { newUser };
  }
}
