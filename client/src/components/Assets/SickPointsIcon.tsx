import React from 'react';

import { HStack, Image, Text } from '@chakra-ui/react';
import { url } from 'inspector';
export default function SickPointsIcon({ item }) {
  return (
    <HStack style={style()}>
      <>
        <Image width='15px' height='15px' src='/fire.png' alt='fire' />
        {item.SICK_points}
      </>
    </HStack>
  );
}

function style() {
  return {
    color: 'white',
    fontWeight: 'bold',
    borderRadius: '30%',
  };
}
