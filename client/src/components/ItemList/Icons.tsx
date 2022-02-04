import React from 'react';
import { VStack, Flex } from '@chakra-ui/react';
import Image from 'next/image';

export default function Icons({ item }) {
  console.log({ item });
  const nut =
    item && !item?.allergies.includes('nutFree') ? '/nut.png' : '/nut-not.png';
  const lactose =
    item && !item?.allergies.includes('lactoseFree')
      ? '/lactose.png'
      : '/lactose-not.png';
  const gluten =
    item && !item?.allergies.includes('glutenFree')
      ? '/gluten.png'
      : '/gluten-not.png';
  const vegan =
    item && item?.diets.includes('vegan') ? '/vegan.png' : '/vegan-not.png';
  const vegetarian =
    item && item?.diets.includes('vegetarian')
      ? '/vegetarian.png'
      : '/vegetarian-not.png';
  const pescatarian =
    item && item?.diets.includes('pescatarian') ? '/fish.png' : '/fish-not.png';
  return (
    <Flex sx={fStyle()}>
      <VStack>
        <Image src={nut} alt='nut' width='15px' height='15px' />
        <Image src={lactose} alt='lactose' width='15px' height='15px' />
        <Image src={gluten} alt='gluten' width='15px' height='15px' />
      </VStack>
      <VStack>
        <Image src={vegan} alt='vegan' width='15px' height='15px' />
        <Image src={vegetarian} alt='vegetarian' width='15px' height='15px' />
        <Image src={pescatarian} alt='gluten' width='15px' height='15px' />
      </VStack>
    </Flex>
  );
}

function fStyle() {
  return {
    borderRadius: '2px',
    padding: '3px',
  };
}
