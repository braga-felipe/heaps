import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Allergies {
  GlutenFree = 'glutenFree',
  LactoseFree = 'lactoseFree',
  NutFree = 'nutFree'
}

export type Chat = {
  __typename?: 'Chat';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  item: Item;
  itemOwnerId: Scalars['Int'];
  messages?: Maybe<Array<Message>>;
  updatedAt: Scalars['String'];
  userOwnerId: Scalars['Int'];
  users: Array<User>;
};

export type ChatCreateInput = {
  itemOwnerId: Scalars['Int'];
  userOwnerId: Scalars['Int'];
  userRequesterId: Scalars['Int'];
};

export type CreateUserInput = {
  address: Scalars['String'];
  email: Scalars['String'];
  img_url?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
  zipCode: Scalars['String'];
};

export enum Diets {
  Pescatarian = 'pescatarian',
  Vegan = 'vegan',
  Vegetarian = 'vegetarian'
}

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  SICK_points: Scalars['Int'];
  allergies: Array<Allergies>;
  archive: Scalars['Boolean'];
  chats: Array<Chat>;
  complete: Scalars['Boolean'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  diets: Array<Diets>;
  id: Scalars['Int'];
  isGroceries: Scalars['Boolean'];
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['Int'];
  servings: Scalars['Int'];
  takers: User;
  updatedAt: Scalars['String'];
};

export type ItemCreateInput = {
  allergies: Array<Allergies>;
  description: Scalars['String'];
  diets: Array<Diets>;
  isGroceries: Scalars['Boolean'];
  name: Scalars['String'];
  ownerId: Scalars['Float'];
  servings: Scalars['Float'];
};

export type ItemUpdateInput = {
  id: Scalars['Int'];
  updateOptions: ItemUpdateOptions;
};

export type ItemUpdateOptions = {
  SICK_points?: InputMaybe<Scalars['Float']>;
  archive?: InputMaybe<Scalars['Boolean']>;
  complete?: InputMaybe<Scalars['Boolean']>;
  servings?: InputMaybe<Scalars['Float']>;
};

export type Message = {
  __typename?: 'Message';
  authorId: Scalars['Int'];
  chat: Chat;
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  isRead: Scalars['Boolean'];
  text: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type MessageCreateInput = {
  chatId: Scalars['Int'];
  currentUserId: Scalars['Int'];
  text: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createChat: Chat;
  createItem: Item;
  createMessage: Message;
  createUser: UserResponse;
  updateItem: Item;
};


export type MutationCreateChatArgs = {
  options: ChatCreateInput;
};


export type MutationCreateItemArgs = {
  options: ItemCreateInput;
};


export type MutationCreateMessageArgs = {
  options: MessageCreateInput;
};


export type MutationCreateUserArgs = {
  options: CreateUserInput;
};


export type MutationUpdateItemArgs = {
  options: ItemUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  getChat?: Maybe<Chat>;
  getItem?: Maybe<Item>;
  getOneUserByID: User;
};


export type QueryGetChatArgs = {
  id: Scalars['Int'];
};


export type QueryGetItemArgs = {
  id: Scalars['Int'];
};


export type QueryGetOneUserByIdArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  SICK_points?: Maybe<Scalars['Int']>;
  address: Scalars['String'];
  chats?: Maybe<Array<Chat>>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Float'];
  img_url?: Maybe<Scalars['String']>;
  items_owned: Array<Item>;
  items_taken?: Maybe<Array<Item>>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  zipCode: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  newUser?: Maybe<User>;
};

export type Create_ItemMutationVariables = Exact<{
  options: ItemCreateInput;
}>;


export type Create_ItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } };

export type Update_ItemMutationVariables = Exact<{
  options: ItemUpdateInput;
}>;


export type Update_ItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } };

export type Get_ItemQueryVariables = Exact<{
  getItemId: Scalars['Int'];
}>;


export type Get_ItemQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } | null | undefined };

export type Get_User_By_IdQueryVariables = Exact<{
  getOneUserByIdId: Scalars['Int'];
}>;


export type Get_User_By_IdQuery = { __typename?: 'Query', getOneUserByID: { __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, createdAt: string, updatedAt: string, items_owned: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, ownerId: number, owner: { __typename?: 'User', id: number, username: string } }> } };


export const Create_ItemDocument = gql`
    mutation CREATE_ITEM($options: ItemCreateInput!) {
  createItem(options: $options) {
    id
    name
    description
    servings
    complete
    archive
    isGroceries
    allergies
    diets
    SICK_points
    createdAt
    updatedAt
  }
}
    `;

export function useCreate_ItemMutation() {
  return Urql.useMutation<Create_ItemMutation, Create_ItemMutationVariables>(Create_ItemDocument);
};
export const Update_ItemDocument = gql`
    mutation UPDATE_ITEM($options: ItemUpdateInput!) {
  updateItem(options: $options) {
    id
    name
    description
    servings
    complete
    archive
    isGroceries
    allergies
    diets
    SICK_points
    createdAt
    updatedAt
  }
}
    `;

export function useUpdate_ItemMutation() {
  return Urql.useMutation<Update_ItemMutation, Update_ItemMutationVariables>(Update_ItemDocument);
};
export const Get_ItemDocument = gql`
    query GET_ITEM($getItemId: Int!) {
  getItem(id: $getItemId) {
    id
    name
    description
    servings
    complete
    archive
    isGroceries
    allergies
    diets
    SICK_points
    createdAt
    updatedAt
  }
}
    `;

export function useGet_ItemQuery(options: Omit<Urql.UseQueryArgs<Get_ItemQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_ItemQuery>({ query: Get_ItemDocument, ...options });
};
export const Get_User_By_IdDocument = gql`
    query GET_USER_BY_ID($getOneUserByIdId: Int!) {
  getOneUserByID(id: $getOneUserByIdId) {
    id
    username
    email
    address
    zipCode
    SICK_points
    items_owned {
      id
      name
      description
      servings
      complete
      archive
      isGroceries
      allergies
      diets
      SICK_points
      ownerId
      owner {
        id
        username
      }
    }
    createdAt
    updatedAt
  }
}
    `;

export function useGet_User_By_IdQuery(options: Omit<Urql.UseQueryArgs<Get_User_By_IdQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_User_By_IdQuery>({ query: Get_User_By_IdDocument, ...options });
};