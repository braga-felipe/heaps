import { ObjectType, Field, Int } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Item } from "./Item";
import { Message } from "./Message";
import { User } from "./User";

@ObjectType()
@Entity()
export class Chat extends BaseEntity {
  //@Field is the Graphql property, you need to add return type for typegraphql
  //the 'type' property defines the postgres datatype used by the migration to generate sql

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  //If you comment out a @Field, you won't expose that data in graphQL
  @Field(() => [User])
  @ManyToMany(() => User, (user: User) => user.chats)
  users: User[];

  @Field(() => Item)
  @ManyToOne(() => Item, (item: Item) => item.chats)
  item: Item;

  @Field(() => [Message])
  @OneToMany(() => Message, (message: Message) => message.chat)
  messages: Message[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}