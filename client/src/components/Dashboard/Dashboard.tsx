import React, { useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { getMyItems } from '../../redux/actions/items';
import { useDispatch } from 'react-redux';
import { useGetMyItemsQuery } from '../../generated/graphql';

export default function Dashboard() {
  const dispatch = useDispatch();
  // fetching user using session id and getting user's item
  const [{ error, fetching, data }] = useGetMyItemsQuery();
  const myItems = data?.me.items_owned;
  // updating state with fetched items
  dispatch(getMyItems(myItems));

  return (
    <Container align='center'>
      <Box>
        <h1>NavBar</h1>
      </Box>
      <Box></Box>
      {error ? (
        <Heading>Oops, there's was an error</Heading>
      ) : fetching ? (
        <Heading>Fetching your items...</Heading>
      ) : (
        <>
          <Box className='list'>
            <Heading sx={{
              width: '129px',
              height: '22px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '18px',
              lineSeight: '22px',
            }}>Current List</Heading>
            <ItemList complete={false} />
          </Box>
          <Box className='list'>
            <Heading sx={{
              width: '129px',
              height: '22px',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '18px',
              lineSeight: '22px',
            }}>Past List</Heading>
            <ItemList complete={true} />
          </Box>
        </>
      )}
    </Container>
  );
}

function hStyles() {
  return {
    width: '129px',
    height: '22px',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '18px',
    lineSeight: '22px',
  };
}
