import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../Register/Register';
import ItemCard from './ItemCard';

interface ItemProp {
  name: string;
  description: string;
  complete: boolean;
}

export default function ItemList({ complete }) {
  // const items = useSelector((state: State) => state.items);
  const mockItems = [
    { name: 'Risotto', description: 'Very yummy risotto', complete: true },
    { name: 'Lasagna', description: 'Very yummy lasagna', complete: true },
    { name: 'Burger', description: 'Very yummy burger', complete: false },
    { name: 'Ramen', description: 'Very yummy ramen', complete: true },
    { name: 'Sushi', description: 'Very yummy sushi', complete: false },
    { name: 'Curry', description: 'Very yummy curry', complete: false },
  ];

  return (
    <div>
      {mockItems.map((item: ItemProp) => {
        if (item.complete === complete) {
          return <ItemCard item={item} key={item.name} />;
        }
      })}
    </div>
  );
}
