import { ObjectType, Field, Int, InputType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Diets, Allergies } from "../resolvers/item";
import { Chat } from "./Chat";
import { User } from "./User";

@ObjectType()
@InputType()
@Entity()
export class Item extends BaseEntity {

  //@Field is the Graphql property, you need to add return type for typegraphql
  //the 'type' property defines the postgres datatype used by the migration to generate sql

  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id!: number;

  //If you comment out a @Field, you won't expose that data in graphQL
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  description: string;

  @Field(() => Int)
  @Column()
  servings: number;

  @Field(() => Boolean)
  @Column('boolean', {default: false})
  complete: boolean = false;

  @Field(() => Boolean)
  @Column('boolean', {default: false})
  archive: boolean = false;

  @Field(() => Boolean)
  @Column('boolean', {default: false})
  isGroceries: boolean = false;

  //Allergies and Diets only necessary for 'dish' type items, so marked as optional
  @Field(() => [Allergies])
  @Column('text', {array: true})
  allergies?: Allergies[];

  @Field(() => [Diets])
  @Column('text', {array: true})
  diets?: Diets[];

  @Field(() => Int)
  @Column('int', {default: 0})
  SICK_points: number = 0;

  @Field(() => Int)
  @Column()
  ownerId: number;

  @Field(() => User)
  @ManyToOne(() => User, (user: User) => user.items_owned, {onDelete: 'SET NULL'})
  owner: User;

  @Field(() => [User])
  @ManyToMany(() => User, (user: User) => user.items_taken, {onDelete: 'SET NULL'})
  @JoinTable()
  takers: User[];

  @Field(() => [Chat])
  @OneToMany(() => Chat, (chat: Chat) => chat.item, {onDelete: 'SET NULL'})
  chats: Chat[];

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}