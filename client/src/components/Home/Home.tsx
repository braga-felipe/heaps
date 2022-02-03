import React from 'react';
import { useGet_All_ItemsQuery } from '../../generated/graphql';
import Groceries from './Groceries';
import Dishes from './Dishes';
import { Button } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useRouter } from 'next/router';


export default function Home() {

  const router = useRouter();
  const [{ data }] = useGet_All_ItemsQuery();


  if (data) {
    console.log('data', data.getAllItems);
  }

  function showCreateItem() {
    router.push('/' + 'createItem');
  }

  return (
    <div>
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
      <Button onClick={showCreateItem}
        size='md'
        height='48px'
        width='200px'
        border='2px'
        borderColor='green.500'
      >
        Post dish
      </Button>
    </div>
  );
}
