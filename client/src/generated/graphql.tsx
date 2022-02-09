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
  takers: Array<User>;
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

export type ItemTakeInput = {
  itemId: Scalars['Int'];
  userId: Scalars['Int'];
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
  MarkAsRead: Message;
  createChat: Chat;
  createItem: Item;
  createMessage: Message;
  createUser: UserResponse;
  logout: Scalars['Boolean'];
  takeItem: Item;
  updateItem: Item;
  updateUser: User;
  userLogin: UserResponse;
};


export type MutationMarkAsReadArgs = {
  id: Scalars['Int'];
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


export type MutationTakeItemArgs = {
  options: ItemTakeInput;
};


export type MutationUpdateItemArgs = {
  options: ItemUpdateInput;
};


export type MutationUpdateUserArgs = {
  options: UserUpdateOptionsInput;
};


export type MutationUserLoginArgs = {
  options: UserLoginInput;
};

export type Query = {
  __typename?: 'Query';
  getAllItems?: Maybe<Array<Item>>;
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
  lat: Scalars['Float'];
  lng: Scalars['Float'];
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

export type UserUpdateOptionsInput = {
  address?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  img_url?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
  zipCode?: InputMaybe<Scalars['String']>;
};

export type AcceptItemClaimMutationVariables = Exact<{
  options: ItemTakeInput;
}>;


export type AcceptItemClaimMutation = { __typename?: 'Mutation', takeItem: { __typename?: 'Item', id: number } };

export type CreateChatMutationVariables = Exact<{
  options: ChatCreateInput;
}>;


export type CreateChatMutation = { __typename?: 'Mutation', createChat: { __typename?: 'Chat', id: number } };

export type Create_ItemMutationVariables = Exact<{
  options: ItemCreateInput;
}>;


export type Create_ItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } };

export type CreateMessageMutationVariables = Exact<{
  options: MessageCreateInput;
}>;


export type CreateMessageMutation = { __typename?: 'Mutation', createMessage: { __typename?: 'Message', id: number, text: string, authorId: number, isRead: boolean, createdAt: string } };

export type Create_UserMutationVariables = Exact<{
  options: CreateUserInput;
}>;


export type Create_UserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type MarkAsReadMutationVariables = Exact<{
  markAsReadId: Scalars['Int'];
}>;


export type MarkAsReadMutation = { __typename?: 'Mutation', MarkAsRead: { __typename?: 'Message', id: number } };

export type Update_ItemMutationVariables = Exact<{
  options: ItemUpdateInput;
}>;


export type Update_ItemMutation = { __typename?: 'Mutation', updateItem: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } };

export type Update_UserMutationVariables = Exact<{
  options: UserUpdateOptionsInput;
}>;


export type Update_UserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: number, username: string, address: string, zipCode: string } };

export type User_LoginMutationVariables = Exact<{
  options: UserLoginInput;
}>;


export type User_LoginMutation = { __typename?: 'Mutation', userLogin: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', username: string, id: number, email: string, address: string, zipCode: string } | null | undefined } };

export type Get_All_ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_ItemsQuery = { __typename?: 'Query', getAllItems?: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, ownerId: number, createdAt: string, updatedAt: string, owner: { __typename?: 'User', username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, img_url?: string | null | undefined, lat: number, lng: number }, takers: Array<{ __typename?: 'User', username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, img_url?: string | null | undefined }>, chats: Array<{ __typename?: 'Chat', users: Array<{ __typename?: 'User', id: number }> }> }> | null | undefined };

export type Get_All_UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_All_UsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, createdAt: string, updatedAt: string, items_owned?: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number }> | null | undefined, items_taken?: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number }> | null | undefined }> };

export type GetChatMessagesQueryVariables = Exact<{
  getChatId: Scalars['Int'];
}>;


export type GetChatMessagesQuery = { __typename?: 'Query', getChat?: { __typename?: 'Chat', id: number, userOwnerId: number, item: { __typename?: 'Item', name: string, id: number }, users: Array<{ __typename?: 'User', id: number, username: string, img_url?: string | null | undefined }>, messages?: Array<{ __typename?: 'Message', id: number, text: string, authorId: number, isRead: boolean, createdAt: string }> | null | undefined } | null | undefined };

export type Get_ItemQueryVariables = Exact<{
  getItemId: Scalars['Int'];
}>;


export type Get_ItemQuery = { __typename?: 'Query', getItem?: { __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, createdAt: string, updatedAt: string } | null | undefined };

export type GetMyChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyChatsQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, chats?: Array<{ __typename?: 'Chat', id: number, item: { __typename?: 'Item', name: string, ownerId: number }, messages?: Array<{ __typename?: 'Message', text: string, authorId: number, isRead: boolean, createdAt: string }> | null | undefined, users: Array<{ __typename?: 'User', username: string, id: number, img_url?: string | null | undefined }> }> | null | undefined } | null | undefined };

export type GetMyItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyItemsQuery = { __typename?: 'Query', me?: { __typename?: 'User', items_owned?: Array<{ __typename?: 'Item', name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number }> | null | undefined } | null | undefined };

export type Get_User_By_IdQueryVariables = Exact<{
  getOneUserByIdId: Scalars['Int'];
}>;


export type Get_User_By_IdQuery = { __typename?: 'Query', getOneUserByID: { __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, createdAt: string, updatedAt: string, items_owned?: Array<{ __typename?: 'Item', id: number, name: string, description: string, servings: number, complete: boolean, archive: boolean, isGroceries: boolean, allergies: Array<Allergies>, diets: Array<Diets>, SICK_points: number, ownerId: number, owner: { __typename?: 'User', id: number, username: string } }> | null | undefined } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, username: string, email: string, address: string, zipCode: string, SICK_points?: number | null | undefined, lat: number, lng: number, img_url?: string | null | undefined, createdAt: string, updatedAt: string, items_owned?: Array<{ __typename?: 'Item', id: number }> | null | undefined, items_taken?: Array<{ __typename?: 'Item', id: number }> | null | undefined, chats?: Array<{ __typename?: 'Chat', id: number, item: { __typename?: 'Item', name: string, ownerId: number }, messages?: Array<{ __typename?: 'Message', text: string, authorId: number, isRead: boolean, createdAt: string }> | null | undefined, users: Array<{ __typename?: 'User', username: string, id: number, img_url?: string | null | undefined }> }> | null | undefined } | null | undefined };


export const AcceptItemClaimDocument = gql`
    mutation AcceptItemClaim($options: ItemTakeInput!) {
  takeItem(options: $options) {
    id
  }
}
    `;

export function useAcceptItemClaimMutation() {
  return Urql.useMutation<AcceptItemClaimMutation, AcceptItemClaimMutationVariables>(AcceptItemClaimDocument);
};
export const CreateChatDocument = gql`
    mutation CreateChat($options: ChatCreateInput!) {
  createChat(options: $options) {
    id
  }
}
    `;

export function useCreateChatMutation() {
  return Urql.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument);
};
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
export const CreateMessageDocument = gql`
    mutation CreateMessage($options: MessageCreateInput!) {
  createMessage(options: $options) {
    id
    text
    authorId
    isRead
    createdAt
  }
}
    `;

export function useCreateMessageMutation() {
  return Urql.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument);
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
export const LogoutDocument = gql`
    mutation LOGOUT {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const MarkAsReadDocument = gql`
    mutation MarkAsRead($markAsReadId: Int!) {
  MarkAsRead(id: $markAsReadId) {
    id
  }
}
    `;

export function useMarkAsReadMutation() {
  return Urql.useMutation<MarkAsReadMutation, MarkAsReadMutationVariables>(MarkAsReadDocument);
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
export const Update_UserDocument = gql`
    mutation UPDATE_USER($options: UserUpdateOptionsInput!) {
  updateUser(options: $options) {
    id
    username
    address
    zipCode
  }
}
    `;

export function useUpdate_UserMutation() {
  return Urql.useMutation<Update_UserMutation, Update_UserMutationVariables>(Update_UserDocument);
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
export const Get_All_ItemsDocument = gql`
    query GET_ALL_ITEMS {
  getAllItems {
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
      username
      email
      address
      zipCode
      SICK_points
      img_url
      lat
      lng
    }
    takers {
      username
      email
      address
      zipCode
      SICK_points
      img_url
    }
    chats {
      users {
        id
      }
    }
    createdAt
    updatedAt
  }
}
    `;

export function useGet_All_ItemsQuery(options: Omit<Urql.UseQueryArgs<Get_All_ItemsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Get_All_ItemsQuery>({ query: Get_All_ItemsDocument, ...options });
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
export const GetChatMessagesDocument = gql`
    query getChatMessages($getChatId: Int!) {
  getChat(id: $getChatId) {
    id
    userOwnerId
    item {
      name
      id
    }
    users {
      id
      username
      img_url
    }
    messages {
      id
      text
      authorId
      isRead
      createdAt
    }
  }
}
    `;

export function useGetChatMessagesQuery(options: Omit<Urql.UseQueryArgs<GetChatMessagesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetChatMessagesQuery>({ query: GetChatMessagesDocument, ...options });
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
export const GetMyChatsDocument = gql`
    query GetMyChats {
  me {
    id
    chats {
      id
      item {
        name
        ownerId
      }
      messages {
        text
        authorId
        isRead
        createdAt
      }
      users {
        username
        id
        img_url
      }
    }
  }
}
    `;

export function useGetMyChatsQuery(options: Omit<Urql.UseQueryArgs<GetMyChatsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMyChatsQuery>({ query: GetMyChatsDocument, ...options });
};
export const GetMyItemsDocument = gql`
    query GetMyItems {
  me {
    items_owned {
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
  }
}
    `;

export function useGetMyItemsQuery(options: Omit<Urql.UseQueryArgs<GetMyItemsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMyItemsQuery>({ query: GetMyItemsDocument, ...options });
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
      item {
        name
        ownerId
      }
      messages {
        text
        authorId
        isRead
        createdAt
      }
      users {
        username
        id
        img_url
      }
    }
    lat
    lng
    img_url
    createdAt
    updatedAt
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};