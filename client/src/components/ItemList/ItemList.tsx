import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../Register/Register';
import { Box } from '@chakra-ui/react';
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
    <Box>
      {items.map((item: ItemProp) => {
        // filter items by the complete props and user id
        if (item.complete === complete && item.ownerId === user.id) {
          return <ItemCard item={item} key={item.id} />;
        }
      })}
    </Box>
  );
}
