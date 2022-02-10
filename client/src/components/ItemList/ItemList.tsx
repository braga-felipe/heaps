import React, { useEffect } from 'react';
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

export default function ItemList({ complete, buttonName, path, isOwner }) {
  // access items and user from store
  const items = useSelector((state: State) => state.items);
  const user = useSelector((state: State) => state.user);
  const itemsToView = [];

  useEffect(() => {
    itemsToView
    items
  },[itemsToView, items])

  return (
    <Container sx={cStyle()} className='round-container'>
      <Container>
        {items.map((item: ItemProp, index) => {
          // filter items by the complete props and user id
          if (
            item.complete === complete &&
            item.ownerId === user.id &&
            isOwner === true
          ) {
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
          } else if (
            item.complete === complete &&
            user.items_taken.filter((i) => i.id === item.id).length &&
            isOwner === false
          ) {
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
          } else if (
            item.complete === complete &&
            user.items_taken.filter((i) => i.id === item.id).length &&
            isOwner === false
          ) {
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

function cStyle() {
  return {
    width: '335px',
    alignItems: 'center',
  };
}
