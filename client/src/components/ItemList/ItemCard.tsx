import React from 'react';
import {
  Box,
  Container,
  Text,
  Flex,
  VStack,
  Image,
  Heading,
} from '@chakra-ui/react';
import { AccordionComponent as Accordion } from '../ChakraUiComponents/Accordion/Accordion';
import { items } from '../../redux/reducers/items';
export default function ItemCard({ item }) {
  return (
    <Container sx={{ border: 'solid', marginTop: '3px' }}>
      <Flex justify='space-around' align='center'>
        <Heading fontSize='md'>{item.name}</Heading>
        <VStack>
          {item.diets.map((diet) => (
            <Text fontSize='xs'>{diet}</Text>
          ))}
        </VStack>
        <Box>
          <Image
            borderRadius='full'
            boxSize='80px'
            src='https://ca.slack-edge.com/T0WU5R8NT-U02GWRVJERW-72846fc663f1-512'
            alt='profile'
          />
        </Box>
      </Flex>
      <Accordion item={item} />
    </Container>
  );
}
