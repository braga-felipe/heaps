import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../pages/index';
import { Container } from '@chakra-ui/react';
import ItemCard from './ItemCard';
import Empty from '../Assets/Empty';
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

export default function ItemList({ /*items,*/ complete, buttonName, path }) {
  // access items and user from store
  const items = useSelector((state: State) => state.items);
  const user = useSelector((state: State) => state.user);
  const itemsToView = [];
  return (
    <Container margin={'2 0 2 0'} padding={'0'}>
      <Container>
        {items.map((item: ItemProp, index) => {
          // filter items by the complete props and user id
          if (item.complete === complete && item.ownerId === user.id) {
            itemsToView.push(item);
            return (
              <ItemCard
                user={user}
                item={item}
                key={index}
                buttonName={buttonName}
                path={path}
              />
            );
          }
        })}
      </Container>
      <Container>{!itemsToView.length && <Empty />}</Container>
    </Container>
  );
}
