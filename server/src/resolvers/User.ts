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
import * as argon2 from "argon2";
import { MyContext } from '../types'


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

@InputType()
class UserLoginInput {
  @Field()
  email: string;

  @Field()
  password: string;
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
  user?: User;
}

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async getAllUsers(): Promise<User[] | undefined> {
    const allUser = await User.find();
    return allUser;
  }

  @Query(() => User)
  async getOneUserByID(@Arg("id", () => Int) id: number): Promise<User | undefined> {
    const user = await User.findOneOrFail(id, {
      relations: ["items_owned", "chats"],
    });
    return user;
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("options") options: CreateUserInput,
    @Ctx() {req} : MyContext
  ): Promise<UserResponse> {
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
    let user;
    try {
      const checkUser = await User.findOne({ email: options.email })
      if (checkUser) {
        return {
          errors: [
            {
            field: "email",
            message: "Email already in use."
            }
          ]
        }
      }
      user = await User.create({
        username: options.username,
        password: hashedPassword,
        email: options.email,
        address: options.address,
        zipCode: options.zipCode,
        img_url: options.img_url,
      }).save();
    } catch (err) {
      if (err) {
        console.log(err)
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
    req.session.userId = user?.id;
    return { user };
  }

  @Mutation(() => UserResponse)
  async userLogin(
    @Arg('options') options: UserLoginInput,
    @Ctx() {req} : MyContext
    ): Promise<UserResponse> {

      const user = await User.findOne({ email: options.email });
      if (!user) {
        return {
          errors: [
            {
              field: "email",
              message: "Email and password combination does not match."
            }
          ]
        }
      }
      const validPasswordCheck = await argon2.verify(user.password, options.password);
      if (!validPasswordCheck) {
        return {
          errors: [
            {
              field: "password",
              message: "Password and password combination does not match."
            }
          ]
        }
      }
      req.session.userId = user.id
      return { user };
    }

    //Authentication query. Returns user or null
    @Query(() => User, { nullable: true })
    me(@Ctx() { req }: MyContext) {
      if (!req.session.userId) {
        return null;
      }
      return User.findOne(req.session.userId);
    }

    @Mutation(() => Boolean)
    logout(@Ctx() { req, res }: MyContext) {
      return new Promise((resolve) =>
        req.session.destroy((err) => {
          res.clearCookie('qid');
          if (err) {
            console.log(err);
            resolve(false);
            return;
          }
          resolve(true);
        })
      );
    }
}
