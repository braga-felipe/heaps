import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../pages/index';
import { Container, VStack } from '@chakra-ui/react';
import ItemCard from '../ItemList/ItemCard';

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

export default function HomeList({ isGroceries, buttonName, path }) {
  // access items and user from store
  const items = useSelector((state: State) => state.items);
  const user = useSelector((state: State) => state.user);

  return (
    <Container margin={'-6'} padding={'-2'}>
      {items
        .filter((item: ItemProp) => item.isGroceries === isGroceries)
        .map((item: ItemProp, index) => (
          <ItemCard
            user={user}
            item={item}
            key={index}
            buttonName={buttonName}
            path={path}
          />
        ))}
    </Container>
  );
}
