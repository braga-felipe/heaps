import React from 'react';
import ItemList from '../ItemList/ItemList';
import { Box, Container, Heading } from '@chakra-ui/react';

export default function Dashboard() {
  return (
    <Container sx={{ width: '350px' }}>
      <Box>
        <h1>NavBar</h1>
      </Box>
      <Container>
        <Heading sx={hStyles()}>Current List</Heading>
        <Box
          width='400px'
          borderRadius='15px'
          border='1px solid #E2E8F0'
          alignItems='center'>
          <ItemList complete={false} buttonName='Chat' path='chatLobby' />
        </Box>
        <Heading sx={hStyles()}>Past List</Heading>
        <Box
          width='400px'
          borderRadius='15px'
          border='1px solid #E2E8F0'
          alignItems='center'>
          <ItemList complete={true} buttonName='Chat' path='chatLobby' />
        </Box>
      </Container>
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
