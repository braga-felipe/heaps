import React, { useState } from 'react';
import Groceries from './Groceries';
import Dishes from './Dishes';
import Loading from '../Assets/Loading';
// import { useRouter } from 'next/router';
import Grocery from '../Assets/Grocery';
// import Map from '../Map/Map';
import Map from '../../pages/map';
import {
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Flex,
  Box,
  Heading,
} from '@chakra-ui/react';
import { State } from '../../pages';
import { useSelector } from 'react-redux';

export default function Home() {
  const items = useSelector((state: State) => state.items);
  const [isGroceries, setIsGroceries] = useState(true);
  const [isMap, setIsMap] = useState(false);
  return items ? (
    <Container sx={cStyle()}>
      <Grocery isGroceries={isGroceries} />
      <Box sx={bStyle()}>
        <Button
          backgroundColor='primary'
          color='white'
          onClick={() => {
            setIsMap(!isMap);
          }}>
          {isMap ? 'list' : 'map'}
        </Button>
      </Box>
      <Tabs
        onChange={(index) => setIsGroceries(!isGroceries)}
        isFitted
        mt='0px'
        variant='enclosed'>
        <TabList mb='5px'>
          <Tab _selected={{ color: 'primary' }} color='secondary'>
            Groceries
          </Tab>
          <Tab _selected={{ color: 'primary' }} color='secondary'>
            Dishes
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>{isMap ? <Map /> : <Groceries />}</TabPanel>
          <TabPanel>{isMap ? <Map /> : <Dishes />}</TabPanel>
        </TabPanels>
      </Tabs>
      <Flex mb='10px' justify='space-around'></Flex>
    </Container>
  ) : (
    <Loading />
  );
}
function bStyle() {
  return {
    position: 'absolute',
    marginLeft: '305px',
    marginTop: '-45px',
  };
}
function cStyle() {
  return {
    margin: '0',
    padding: '0',
    width: '375px',
    borderRadius: '0px',
    border: '1px solid #E2E8F0',
    alignItems: 'center',
  };
}
