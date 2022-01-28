import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
const defaultOptions = {} as const;
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

/**
 * __useGet_ItemQuery__
 *
 * To run a query within a React component, call `useGet_ItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_ItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_ItemQuery({
 *   variables: {
 *      getItemId: // value for 'getItemId'
 *   },
 * });
 */
export function useGet_ItemQuery(
  baseOptions: Apollo.QueryHookOptions<Get_ItemQuery, Get_ItemQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<Get_ItemQuery, Get_ItemQueryVariables>(
    Get_ItemDocument,
    options
  );
}
export function useGet_ItemLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_ItemQuery,
    Get_ItemQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<Get_ItemQuery, Get_ItemQueryVariables>(
    Get_ItemDocument,
    options
  );
}
export type Get_ItemQueryHookResult = ReturnType<typeof useGet_ItemQuery>;
export type Get_ItemLazyQueryHookResult = ReturnType<
  typeof useGet_ItemLazyQuery
>;
export type Get_ItemQueryResult = Apollo.QueryResult<
  Get_ItemQuery,
  Get_ItemQueryVariables
>;

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
