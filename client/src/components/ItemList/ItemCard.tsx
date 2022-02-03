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

export default function ItemCard({ user, item }) {
  return (
    <Container
      sx={{
        border: '1px solid',
        marginTop: '3px',
        width: '317px',
        left: '29px',
        top: '571px',
        background: '#5D55B4',
        borderRadius: ' 10px',
      }}>
      <Flex justify='space-around' align='center'>
        <Heading fontSize='md'>{item.name}</Heading>
        {/* <VStack>
          {item.diets.map((diet) => (
            <Text key={diet} fontSize='xs'>
              {diet}
            </Text>
          ))}
        </VStack> */}
        <Box>
          <Image
            borderRadius='full'
            boxSize='80px'
            src={
              user.img_url ||
              'https://ca.slack-edge.com/T0WU5R8NT-U02GWRVJERW-72846fc663f1-512'
            }
            alt='profile'
          />
        </Box>
      </Flex>
      <Accordion item={item} />
    </Container>
  );
}
