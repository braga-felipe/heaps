import { ObjectType, Field, Int } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  OneToMany,
  JoinTable,
  ManyToMany,
  Column,
} from "typeorm";
import { Chat } from "./Chat";
import { Item } from "./Item";

@ObjectType()
@Entity()
export class User extends BaseEntity { 

  //@Field is the Graphql property, you need to add return type for typegraphql
  //the 'type' property defines the postgres datatype used by the migration to generate sql
 
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => [Item])
  @OneToMany(() => Item, (item: Item) => item.owner)
  items_owned: Item[] | [];

  @Field(() => [Item])
  @Column(() => Item)
  items_taken: Item[]

  @Field(() => [Chat])
  @ManyToMany(() => Chat, (chat: Chat) => chat.users)
  @JoinTable()
  chats: Chat[] | [];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}