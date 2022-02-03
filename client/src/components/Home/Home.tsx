import React from 'react';
import { useGet_All_ItemsQuery } from '../../generated/graphql';
import Groceries from './Groceries';
import Dishes from './Dishes';
import ItemButton from '../ChakraUiComponents/ButtonItem';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Container, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router';


export default function Home() {



  return (
    <Container>
      <Heading>HOME</Heading>
      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Groceries</Tab>
          <Tab>Dishes</Tab>
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
      <ItemButton name='Post Dish' pagePath='createItem' />
      <ItemButton name='Dashboard' pagePath='dashboard' />
    </Container>
  );
}
