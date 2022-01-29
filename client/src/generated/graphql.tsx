import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
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
  NutFree = 'nutFree',
}

export enum Diets {
  Pescatarian = 'pescatarian',
  Vegan = 'vegan',
  Vegetarian = 'vegetarian',
}

export type Item = {
  __typename?: 'Item';
  SICK_points: Scalars['Int'];
  allergies: Array<Allergies>;
  archive: Scalars['Boolean'];
  complete: Scalars['Boolean'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  diets: Array<Diets>;
  id: Scalars['Int'];
  isGroceries: Scalars['Boolean'];
  name: Scalars['String'];
  servings: Scalars['Int'];
  updatedAt: Scalars['String'];
};

export type ItemCreateInput = {
  allergies: Array<Allergies>;
  description: Scalars['String'];
  diets: Array<Diets>;
  isGroceries: Scalars['Boolean'];
  name: Scalars['String'];
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

export type Mutation = {
  __typename?: 'Mutation';
  createItem: Item;
  updateItem: Item;
};

export type MutationCreateItemArgs = {
  options: ItemCreateInput;
};

export type MutationUpdateItemArgs = {
  options: ItemUpdateInput;
};

export type Query = {
  __typename?: 'Query';
  getItem?: Maybe<Item>;
};

export type QueryGetItemArgs = {
  id: Scalars['Int'];
};

export type Create_ItemMutationVariables = Exact<{
  options: ItemCreateInput;
}>;

export type Create_ItemMutation = {
  __typename?: 'Mutation';
  createItem: {
    __typename?: 'Item';
    id: number;
    name: string;
    description: string;
    servings: number;
    complete: boolean;
    archive: boolean;
    isGroceries: boolean;
    allergies: Array<Allergies>;
    diets: Array<Diets>;
    SICK_points: number;
    createdAt: string;
    updatedAt: string;
  };
};

export type Update_ItemMutationVariables = Exact<{
  options: ItemUpdateInput;
}>;

export type Update_ItemMutation = {
  __typename?: 'Mutation';
  updateItem: {
    __typename?: 'Item';
    id: number;
    name: string;
    description: string;
    servings: number;
    complete: boolean;
    archive: boolean;
    isGroceries: boolean;
    allergies: Array<Allergies>;
    diets: Array<Diets>;
    SICK_points: number;
    createdAt: string;
    updatedAt: string;
  };
};

export type Get_ItemQueryVariables = Exact<{
  getItemId: Scalars['Int'];
}>;

export type Get_ItemQuery = {
  __typename?: 'Query';
  getItem?:
    | {
        __typename?: 'Item';
        id: number;
        name: string;
        description: string;
        servings: number;
        complete: boolean;
        archive: boolean;
        isGroceries: boolean;
        allergies: Array<Allergies>;
        diets: Array<Diets>;
        SICK_points: number;
        createdAt: string;
        updatedAt: string;
      }
    | null
    | undefined;
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
  return Urql.useMutation<Create_ItemMutation, Create_ItemMutationVariables>(
    Create_ItemDocument
  );
}
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
  return Urql.useMutation<Update_ItemMutation, Update_ItemMutationVariables>(
    Update_ItemDocument
  );
}
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

export function useGet_ItemQuery(
  options: Omit<Urql.UseQueryArgs<Get_ItemQueryVariables>, 'query'> = {}
) {
  return Urql.useQuery<Get_ItemQuery>({ query: Get_ItemDocument, ...options });
}
