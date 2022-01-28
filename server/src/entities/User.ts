import { ObjectType, Field } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity } from 'typeorm';
import { Item } from './Item'

@ObjectType()
@Entity()
export class User extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ type: "varchar" })
  username: string;

  //@Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  email!: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  zipCode: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  SICK_points?: number;

  @Field(() => [Item])
  @Column()
  itemsAvailable: Item[];

  @Field(() => [Item])
  @Column()
  itemsTaken: Item[];

  @Field(() => String)
  @Column()
  img_url: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  //
}