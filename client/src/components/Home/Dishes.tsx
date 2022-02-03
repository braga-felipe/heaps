import { Container } from '@chakra-ui/react';
import React from 'react';
import HomeList from './HomeList';

export default function Dishes() {


  return (
    <Container>
      <HomeList isGroceries={false} />
    </Container>
  );
}
