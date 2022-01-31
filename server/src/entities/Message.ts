import { ObjectType, Field, Int} from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";
import { Chat } from "./Chat";
import { User } from "./User_Val";

@ObjectType()
@Entity()
export class Message extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column()
  text: string;

  //This is the chat that 'owns' the messages
  @Field(() => Chat)
  @ManyToOne(() => Chat, (chat: Chat) => chat.messages)
  chat: Chat;

  //This is the user who wrote the message
  @Field(() => Int)
  @Column()
  authorId: number;

  @Field(() => Boolean)
  @Column('boolean', {default: false})
  isRead: boolean = false;


  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}