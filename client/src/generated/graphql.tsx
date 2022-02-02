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
  logout: Scalars['Boolean'];
  updateItem: Item;
  userLogin: UserResponse;
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


export type MutationUserLoginArgs = {
  options: UserLoginInput;
};

export type Query = {
  __typename?: 'Query';
  getAllUsers: Array<User>;
  getChat?: Maybe<Chat>;
  getItem?: Maybe<Item>;
  getOneUserByID: User;
  me?: Maybe<User>;
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
  items_owned?: Maybe<Array<Item>>;
  items_taken?: Maybe<Array<Item>>;
  updatedAt: Scalars['String'];
  username: Scalars['String'];
  zipCode: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type Create_ItemMutationVariables = Exact<{
  options: ItemCreateInput;
}>;


export type Create_ItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } };

export type Create_UserMutationVariables = Exact<{
  options: CreateUserInput;
}>;


export type Create_UserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined } | null | undefined } };

export type Update_ItemMutationVariables = Exact<{
  options: ItemUpdateInput;
}>;


export type Update_ItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } };

export type User_LoginMutationVariables = Exact<{
  options: UserLoginInput;
}>;


export type User_LoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', username: string, id: number, email: string, address: string, zipCode: string } | null | undefined } };

export type Get_All_UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_UsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, createdAt: string, updatedAt: string, items_owned?: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number }> | null | undefined, items_taken?: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number }> | null | undefined }> };

export type Get_ItemQueryVariables = Exact<{
  getItemId: Scalars['Int'];
}>;


export type Get_ItemQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } | null | undefined };

export type Get_User_By_IdQueryVariables = Exact<{
  getOneUserByIdId: Scalars['Int'];
}>;


export type Get_User_By_IdQuery = { __typename?: 'Query', getOneUserByID: { __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, createdAt: string, updatedAt: string, items_owned?: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, ownerId: number, owner: { __typename?: 'User', id: number, username: string } }> | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, img_url?: string | null | undefined, createdAt: string, updatedAt: string, items_owned?: Array<{ __typename?: 'Item', id: number }> | null | undefined, items_taken?: Array<{ __typename?: 'Item', id: number }> | null | undefined, chats?: Array<{ __typename?: 'Chat', id: number }> | null | undefined } | null | undefined };


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
export const Create_UserDocument = gql`
    mutation CREATE_USER($options: CreateUserInput!) {
  createUser(options: $options) {
    errors {
      field
      message
    }
    user {
      id
      username
      email
      address
      zipCode
      SICK_points
    }
  }
}
    `;

export function useCreate_UserMutation() {
  return Urql.useMutation<Create_UserMutation, Create_UserMutationVariables>(Create_UserDocument);
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
export const User_LoginDocument = gql`
    mutation USER_LOGIN($options: UserLoginInput!) {
  userLogin(options: $options) {
    errors {
      field
      message
    }
    user {
      username
      id
      email
      address
      zipCode
    }
  }
}
    `;

export function useUser_LoginMutation() {
  return Urql.useMutation<User_LoginMutation, User_LoginMutationVariables>(User_LoginDocument);
};
export const Get_All_UsersDocument = gql`
    query GET_ALL_USERS {
  getAllUsers {
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
    }
    items_taken {
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
    }
    createdAt
    updatedAt
  }
}
    `;

export function useGet_All_UsersQuery(options: Omit<Urql.UseQueryArgs<Get_All_UsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_All_UsersQuery>({ query: Get_All_UsersDocument, ...options });
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
export const MeDocument = gql`
    query ME {
  me {
    id
    username
    email
    address
    zipCode
    SICK_points
    items_owned {
      id
    }
    items_taken {
      id
    }
    chats {
      id
    }
    img_url
    createdAt
    updatedAt
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};