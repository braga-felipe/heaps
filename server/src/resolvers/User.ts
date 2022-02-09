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
import { MyContext } from "../types";
import { getManager } from "typeorm";
import axios from "axios";

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

@InputType()
class UserUpdateOptionsInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  username?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  zipCode?: string;

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
  async getOneUserByID(
    @Arg("id", () => Int) id: number
  ): Promise<User | undefined> {
    const user = await User.findOneOrFail(id, {
      relations: ["items_owned", "chats", "items_taken"],
    });
    return user;
  }

  @Mutation(() => UserResponse)
  async createUser(
    @Arg("options") options: CreateUserInput,
    @Ctx() { req }: MyContext
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

    const coordinates = await axios({
      method: "GET",
      url: `https://open.mapquestapi.com/geocoding/v1/address?key=aY2o4VA1k5YSIMmGNHN3lJkaKBJunk0Q&location=${options.address},${options.zipCode}`,
    }).then((response) => {
      return response.data.results[0].locations[0].displayLatLng;
    });

    let user;
    try {
      const checkUser = await User.findOne({ email: options.email });
      if (checkUser) {
        return {
          errors: [
            {
              field: "email",
              message: "Email already in use.",
            },
          ],
        };
      }
      user = await User.create({
        username: options.username,
        password: hashedPassword,
        email: options.email,
        address: options.address,
        zipCode: options.zipCode,
        img_url: options.img_url,
        lat: coordinates.lat,
        lng: coordinates.lng,
      }).save();
    } catch (err) {
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
    req.session.userId = user?.id;
    return { user };
  }

  @Mutation(() => UserResponse)
  async userLogin(
    @Arg("options") options: UserLoginInput,
    @Ctx() { req }: MyContext
  ): Promise<UserResponse> {
    const user = await User.findOne({ email: options.email });
    if (!user) {
      return {
        errors: [
          {
            field: "email",
            message: "Email and password combination does not match.",
          },
        ],
      };
    }
    const validPasswordCheck = await argon2.verify(
      user.password,
      options.password
    );
    if (!validPasswordCheck) {
      return {
        errors: [
          {
            field: "password",
            message: "Password and password combination does not match.",
          },
        ],
      };
    }
    req.session.userId = user.id;
    return { user };
  }

  //Authentication query. Returns user or null
  @Query(() => User, { nullable: true })
  me(@Ctx() { req }: MyContext) {
    if (!req.session.userId) {
      return null;
    }
    return User.findOne(req.session.userId, {
      relations: ["chats", "items_owned", "items_taken"],
    });
  }

  @Mutation(() => Boolean)
  logout(@Ctx() { req, res }: MyContext) {
    return new Promise((resolve) =>
      req.session.destroy((err) => {
        res.clearCookie("qid");
        if (err) {
          console.log(err);
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }

  @Mutation(() => User)
  async updateUser(
    //The potential fields we can update ("options") are defined in UserUpdateInput type def.
    @Arg("options") options: UserUpdateOptionsInput
  ): Promise<User> {
    const entityManager = getManager();
    if (options.username !== "") {
      // executes UPDATE user SET {options} WHERE id = options.id
      await entityManager.update(User, options.id, {
        username: options.username,
      });
    }
    if (options.address !== "") {
      // executes UPDATE user SET {options} WHERE id = options.id
      await entityManager.update(User, options.id, {
        address: options.address,
      });
    }
    if (options.zipCode !== "") {
      // executes UPDATE user SET {options} WHERE id = options.id
      await entityManager.update(User, options.id, {
        zipCode: options.zipCode,
      });
    }

    if (options.img_url !== "") {
      // executes UPDATE user SET {options} WHERE id = options.id
      await entityManager.update(User, options.id, {
        img_url: options.img_url,
      });
    }
    const updatedUser = await entityManager.findOneOrFail(User, options.id);

    return updatedUser;
  }
}
