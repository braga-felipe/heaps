import { ObjectType, Field, Int, InputType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  ManyToMany,
  OneToMany,
  Column,
  JoinTable,
} from "typeorm";
import { Item } from "./Item";
import { Message } from "./Message";
import { User } from "./User";

@ObjectType()
@InputType()
@Entity()
export class Chat extends BaseEntity {
  //@Field is the Graphql property, you need to add return type for typegraphql
  //the 'type' property defines the postgres datatype used by the migration to generate sql

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => Int)
  @Column()
  userOwnerId: number;

  //If you comment out a @Field, you won't expose that data in graphQL
  @Field(() => [User])
  @ManyToMany(() => User, (user: User) => user.chats, { eager: true })
  @JoinTable()
  users: User[];

  @Field(() => Int)
  @Column()
  itemOwnerId: number;

  @Field(() => Item)
  @ManyToOne(() => Item, (item: Item) => item.chats, { eager: true })
  item: Item;

  @Field(() => [Message], {nullable: true})
  @OneToMany(() => Message, (message: Message) => message.chat, { eager: true })
  messages?: Promise<Message[]>;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}