import { Container } from '@chakra-ui/react';
import React from 'react';
import HomeList from './HomeList';

export default function Groceries() {
  return (
    <Container zIndex='0'>
      <HomeList isGroceries={true} buttonName='Chat' path='chatLobby' />
    </Container>
  );
}
