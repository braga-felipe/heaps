import React from 'react';
import Groceries from './Groceries';
import Dishes from './Dishes';
import ItemButton from '../ChakraUiComponents/ButtonItem';
import SearchBar from '../SeachBar/SearchBar';
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
  return (
    <Container sx={cStyle()}>
      {/*  <SearchBar /> */}
      <Tabs isFitted mt='3px' mb='5px' variant='enclosed'>
        <TabList mb='15px'>
          <Tab color='secondary'>Groceries</Tab>
          <Tab color='secondary'>Dishes</Tab>
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
      </Flex>
    </Container>
  );
}

function cStyle() {
  return {
    width: '375px',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    alignItems: 'center',
  };
}
