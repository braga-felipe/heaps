import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../Register/Register';
import { Box } from '@chakra-ui/react';
import ItemCard from './ItemCard';

interface ItemProp {
  name: string;
  description: string;
  complete: boolean;
}

export default function ItemList({ complete }) {
  // const items = useSelector((state: State) => state.items);
  const mockItems = [
    {
      name: 'Risotto',
      description:
        'Very yummy risotto, made with special ingredients and love.',
      complete: true,
      diets: ['🥬', '🥖', '🥜'],
    },
    {
      name: 'Lasagna',
      description:
        'Very yummy lasagna, made with special ingredients and love.',
      complete: true,
      diets: ['🥬', '🥖', '🥜'],
    },
    {
      name: 'Burger',
      description: 'Very yummy burger, made with special ingredients and love.',
      complete: false,
      diets: ['🥬', '🥖', '🥜'],
    },
    {
      name: 'Ramen',
      description: 'Very yummy ramen, made with special ingredients and love.',
      complete: true,
      diets: ['🥬', '🥖', '🥜'],
    },
    {
      name: 'Sushi',
      description: 'Very yummy sushi, made with special ingredients and love.',
      complete: false,
      diets: ['🥬', '🥖', '🥜'],
    },
    {
      name: 'Curry',
      description: 'Very yummy curry, made with special ingredients and love.',
      complete: false,
      diets: ['🥬', '🥖', '🥜'],
    },
  ];

  return (
    <Box>
      {mockItems.map((item: ItemProp) => {
        if (item.complete === complete) {
          return <ItemCard item={item} key={item.name} />;
        }
      })}
    </Box>
  );
}
