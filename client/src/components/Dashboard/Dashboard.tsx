import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { getMyItems } from '../../redux/actions/items';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMyItemsQuery } from '../../generated/graphql';
import { State } from '../Register/Register';

export default function Dashboard() {
  const dispatch = useDispatch();
  // fetching user using session id
  const [{ error, fetching, data }] = useGetMyItemsQuery();
  const myItems = data?.me.items_owned;
  console.log({ myItems });
  useEffect(() => {
    dispatch(getMyItems(myItems));
  });
  const items = useSelector((state: State) => state.items);
  console.log({ items });
  return (
    <Container>
      <Box>
        <h1>NavBar</h1>
      </Box>
      <Box>
        <Heading>Dashboard</Heading>
      </Box>
      {error ? (
        <Heading>Oops, there's was an error</Heading>
      ) : fetching ? (
        <Heading>Fetching your items...</Heading>
      ) : (
        <>
          <Text fontSize='2xl'>Current List</Text>
          <Box className='list'>
            <ItemList complete={false} />
          </Box>
          <Text fontSize='2xl'>Past List</Text>
          <Box className='list'>
            <ItemList complete={true} />
          </Box>
        </>
      )}
    </Container>
  );
}
