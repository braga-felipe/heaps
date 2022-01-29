import { ObjectType, Field } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column, BaseEntity, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Item } from './Item';
import { Chat } from './Chat';

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
  @OneToMany(() => Item, (item: Item) => item.owner)
  items_owned: Item[] | [];


  @Field(() => [Item])
  @Column(() => Item)
  items_taken: Item[] | [];

  @Field({ nullable: true })
  @Column({ nullable: true })
  img_url?: string;

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => [Chat])
  @ManyToMany(() => Chat, (chat: Chat) => chat.users)
  @JoinTable()
  chats: Chat[] | [];

}