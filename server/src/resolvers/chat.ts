import { Query, Resolver, Arg, Int, Mutation, InputType, Field} from 'type-graphql';
import { Item } from "../entities/Item";
import { getManager} from "typeorm";
import { User } from '../entities/User';
import { Chat } from '../entities/Chat';
import { off } from 'process';


//TODO: Define type for chat create input
@InputType()
class ChatCreateInput {
  @Field(()  => Int)
  userOwnerId: number;

  @Field(()  => Int)
  userRequesterId: number;

  @Field(()  => Int)
  itemOwnerId: number;

}

//Define types for update queries.

@Resolver()
export class ChatResolver {
  @Query(() => Chat, { nullable: true })
  getChat(
    @Arg('id', () => Int) id: number
  ): Promise<Chat| undefined> {
    return Chat.findOne(id, {relations: ["users", "messages", "item"]});
  }

  @Mutation(() => Chat)
  async createChat (
    //The potential fields we can update ("options") are defined in ItemUpdateInput type def.
    @Arg('options') options: ChatCreateInput
  ): Promise<Chat> {
    const entityManager = getManager();
    const user1 = await User.findOneOrFail(options.userOwnerId, {relations: ["chats"]});
    const user2 = await User.findOneOrFail(options.userRequesterId, {relations: ["chats"]});
    const item = await entityManager.findOneOrFail(Item, options.itemOwnerId, { relations: ["chats"]});
    const chat = await entityManager
                        .create(Chat, {...options, users: [user1, user2] , item: item })
                        .save();
    return chat;
  }




}


