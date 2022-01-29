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


  @Field(() => [Item], {nullable: true})
  @OneToMany(() => Item, (item: Item) => item.owner)
  items_owned?: Item[];

  @Field(() => [Item], {nullable: true})
  @Column(() => Item)
  items_taken?: Item[];

  @Field(() => [Chat], {nullable: true})
  @ManyToMany(() => Chat, (chat: Chat) => chat.users)
  @JoinTable()
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