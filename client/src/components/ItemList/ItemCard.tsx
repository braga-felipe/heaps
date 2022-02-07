import React from 'react';
import { useRouter } from 'next/router';
import Icons from './Icons';
import Avatar from '../Assets/Avatar';
import { Container, Flex, Heading, VStack } from '@chakra-ui/react';
import { AccordionComponent as Accordion } from '../ChakraUiComponents/Accordion/Accordion';
import SickPointsIcon from '../Assets/SickPointsIcon';

export default function ItemCard({ user, item, buttonName, path }) {
  const router = useRouter();
  const url = router.route;
  const counter = item.servings;
  return (
    <Container sx={cStyle(user, item)}>
      <Flex sx={fStyle()}>
        <VStack sx={vsStyle()}>
          <Heading isTruncated sx={hStyle()}>
            {item.name}
          </Heading>
          <Heading sx={h2Style()}>ZIP Code:{item.owner?.zipCode}</Heading>
        </VStack>
        <Flex sx={f2Style()}>
          {isOwner(user, item) && url === '/dashboard' ? (
            <>
              {/* <button>+</button>
              <button>-</button> */}
            </>
          ) : (
            <Container sx={spacer()}> </Container>
          )}
          <Heading sx={hp2Style()}>portions</Heading>
          <Heading sx={h3Style()}>
            {counter}/{item.servings}
          </Heading>
        </Flex>
        <Icons item={item} />
        <VStack>
          {/* <ProfileIcon user={user} /> */}
          <Avatar avatar={user.img_url} />
          <SickPointsIcon item={item} />
        </VStack>
      </Flex>
      <Accordion
        item={item}
        buttonName={buttonName}
        counter={counter}
        path={path}
      />
    </Container>
  );
}

function isOwner(user, item) {
  return item.owner?.email === user.email ? true : false;
}

function fStyle() {
  return {
    justifyContent: 'space-between',
    alignItems: 'center',
  };
}

function vsStyle() {
  return {
    marginLeft: '0px',
    width: '100px',
    alignItems: 'center',
  };
}

function hStyle() {
  return {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '800',
    fontSize: '100%',
    width: '100px',
    textAlign: 'left',
  };
}

function h2Style() {
  return {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '10px',
    width: '100px',
    // textAlign: 'left',
  };
}

function f2Style() {
  return {
    flexDirection: 'column',
  };
}

function cStyle(user, item) {
  const background = isOwner(user, item) ? 'primary' : 'secondary';
  return {
    boxSizing: 'none',
    border: '1px solid',
    marginTop: '3px',
    marginLeft: '-10px',
    width: '300px',
    background: background,
    borderRadius: ' 10px',
    boxShadow: '3px 3px 10px rgba(116, 65, 0, 0.2)',
  };
}

function hp2Style() {
  return {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '10px',
    margin: '0',
    width: '45px',
    textAlign: 'left',
  };
}
function h3Style() {
  return {
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '5000',
    fontSize: '15px',
    width: '45px',
    textAlign: 'right',
  };
}
function spacer() {
  return {
    height: '10px',
  };
}
