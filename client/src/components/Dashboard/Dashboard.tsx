import React from 'react';
import Cooking from '../Assets/Cooking';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <>
      <Flex sx={{ justifyContent: 'center' }}>
        <Cooking />
      </Flex>
      <Container sx={cStyle()}>
        <Heading sx={hStyle()}>Current Items</Heading>
        <Box sx={bStyle()} height='300px'>
          <ItemList complete={false} buttonName='Chat' path='chatLobby' />
        </Box>
        <Heading sx={hStyle()}>Past Items</Heading>
        <Box sx={bStyle()} height='150px'>
          <ItemList complete={true} buttonName='Chat' path='chatLobby' />
        </Box>
      </Container>
    </>
  );
}
function bStyle() {
  return {
    width: '400px',
    overflowY: 'scroll',
  };
}
function hStyle() {
  return {
    width: '129px',
    height: '22px',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '5px',
  };
}

function cStyle() {
  return {
    marginTop: '10px',
    width: '400px',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    alignItems: 'center',
  };
}
