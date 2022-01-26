import { ObjectType, Field, Int } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
} from "typeorm";

@ObjectType()
@Entity()
export class Item extends BaseEntity { 

  //@Field is the Graphql property, you need to add return type for typegraphql
  //the 'type' property defines the postgres datatype used by the migration to generate sql
 
  @Field()
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

  //TODO: Add User Entity and Import
  // @ManyToOne(() => User, (user) => user.items) 
  // owner: User;

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
  @Field(() => [String])
  @Column('text',{array: true})
  allergies?: string[] | [];

  @Field(() => [String])
  @Column('text',  {array: true})
  diets?: string[] | [];

  @Field(() => Int)
  @Column('int', {default: 0})
  SICK_points: number = 0;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}
