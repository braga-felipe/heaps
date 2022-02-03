import React from 'react';
import Icons from './Icons';
import { Avatar, Box, Container, Flex, Heading } from '@chakra-ui/react';
import { AccordionComponent as Accordion } from '../ChakraUiComponents/Accordion/Accordion';
import { User } from '../../generated/graphql';
import { Item } from '../../generated/graphql';

export default function ItemCard({ user, item, buttonName, path }) {
  return (
    <Container sx={cStyle()}>
      <Flex sx={fStyle()}>
        <Heading sx={hStyle()}>{item.name}</Heading>
        <Icons item={item} />
        <Box>
          <Avatar
            src={
              user.img_url ||
              'https://ca.slack-edge.com/T0WU5R8NT-U02GWRVJERW-72846fc663f1-512'
            }
            alt='profile'
          />
        </Box>
      </Flex>
      <Accordion item={item} buttonName={buttonName} path={path} />
    </Container>
  );
}

function fStyle() {
  return {
    justifyContent: 'space-between',
    alignItems: 'center',
  };
}

function cStyle() {
  return {
    border: '1px solid',
    marginTop: '3px',
    width: '317px',
    background: '#5D55B4',
    borderRadius: ' 10px',
    boxShadow: '3px 3px 10px rgba(116, 65, 0, 0.2)',
  };
}

function hStyle() {
  return {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '5000',
    fontSize: '20px',
    lineHeight: '22px',
  };
}
