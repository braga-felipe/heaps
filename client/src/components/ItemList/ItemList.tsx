import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../Register/Register';
import { Box, Container } from '@chakra-ui/react';
import ItemCard from './ItemCard';

interface ItemProp {
  id: number;
  name: string;
  description: string;
  complete: boolean;
  SICK_points: number;
  archive: boolean;
  isGroceries: boolean;
  ownerId: number;
}

export default function ItemList({ complete }) {
  // access items and user from store
  const items = useSelector((state: State) => state.items);
  const user = useSelector((state: State) => state.user);
  return (
    <Container margin={'0'} padding={'0'}>
      {items.map((item: ItemProp, index) => {
        // filter items by the complete props and user id
        if (item.complete === complete && item.ownerId === user.id) {
          return <ItemCard user={user} item={item} key={index} />;
        }
      })}
    </Container>
  );
}
