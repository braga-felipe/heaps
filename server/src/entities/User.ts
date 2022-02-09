import { ObjectType, Field, Int, InputType, Float } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity, OneToMany, ManyToMany} from 'typeorm';
import { Item } from './Item';
import { Chat } from './Chat';

@ObjectType()
@InputType()
@Entity()
export class User extends BaseEntity {

  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field(() => String)
  @Column({ type: "text" })
  username!: string;

  //@Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column({ unique: true })
  email!: string;

  @Field(() => String)
  @Column()
  address: string;

  @Field(() => String)
  @Column()
  zipCode: string;

  @Field(() => Float)
  @Column({ type: "double precision" })
  lat: number;

  @Field(() => Float)
  @Column({ type: "double precision" })
  lng: number;

  @Field(() => Int, { nullable: true })
  @Column({ nullable: true })
  SICK_points?: number;

  @Field(() => [Item], { nullable: true })
  @OneToMany(() => Item, (item: Item) => item.owner)
  items_owned?: Item[];

  @Field(() => [Item], {nullable: true})
  @ManyToMany(() => Item, (item: Item) => item.takers)
  items_taken?: Item[];

  @Field(() => [Chat], {nullable: true})
  @ManyToMany(() => Chat, (chat: Chat) => chat.users)
  chats?: Chat[];

  @Field({ nullable: true })
  @Column({ nullable: true })
  img_url?: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;
}