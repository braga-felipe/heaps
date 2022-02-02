import React from 'react';
import { Box } from '@chakra-ui/react';
import { AccordionComponent as Accordion } from '../ChakraUiComponents/Accordion/Accordion';
export default function ItemCard({ item }) {
  return (
    <Accordion />
    // <Box color='red'>
    //   <h1>{item.name}</h1>
    // </Box>
  );
}
