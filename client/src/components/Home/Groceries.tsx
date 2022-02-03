import { Container } from '@chakra-ui/react';
import React from 'react';
import HomeList from './HomeList';

export default function Groceries() {

  return (
    <Container>
      <HomeList isGroceries={true} buttonName='Chat' path='chatLobby' />
    </Container>
  );
}
