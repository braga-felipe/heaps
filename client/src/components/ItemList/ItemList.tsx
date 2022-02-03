import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../Register/Register';
import { Box } from '@chakra-ui/react';
import ItemCard from './ItemCard';
import { useMeQuery } from '../../generated/graphql';

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
  const items = useSelector((state: State) => state.items);
  const [{ error, fetching, data }, me] = useMeQuery();
  const user = data?.me;
  console.log({ user });
  return (
    <Box>
      {items.map((item: ItemProp) => {
        if (item.complete === complete && item.ownerId === user.id) {
          return <ItemCard item={item} key={item.id} />;
        }
      })}
    </Box>
  );
}
