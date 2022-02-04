import React, { useState } from 'react';
import Groceries from './Groceries';
import Dishes from './Dishes';
import ItemButton from '../ChakraUiComponents/ButtonItem';
import SearchBar from '../SeachBar/SearchBar';
import Grocery from '../Assets/Grocery';
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Container,
  Flex,
} from '@chakra-ui/react';

export default function Home() {
  const [isGroceries, setIsGroceries] = useState(true);

  return (
    // <Container>
    <Container sx={cStyle()}>
      <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <Grocery isGroceries={isGroceries} />
      </Flex>

      {/*  <SearchBar /> */}
      <Tabs
        onChange={(index) => setIsGroceries(!isGroceries)}
        isFitted
        mt='3px'
        mb='5px'
        variant='enclosed'>
        <TabList mb='15px'>
          <Tab _selected={{ color: 'primary' }} color='secondary'>
            Groceries
          </Tab>
          <Tab _selected={{ color: 'primary' }} color='secondary'>
            Dishes
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Groceries />
          </TabPanel>
          <TabPanel>
            <Dishes />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex mb='10px' justify='space-around'>
        <ItemButton name='Post Dish' pagePath='createItem' />
        <ItemButton name='Dashboard' pagePath='dashboard' />
      </Flex>
    </Container>
    // </Container>
  );
}

function cStyle() {
  return {
    width: '375px',
    borderRadius: '15px',
    // border: '1px solid #E2E8F0',
    alignItems: 'center',
  };
}
