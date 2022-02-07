import React, { useEffect, useState} from 'react';
import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Avatar,
  Wrap,
  WrapItem,
  Button,
  ButtonGroup,
  Flex,
  Popover,
} from '@chakra-ui/react';
import { Editable, EditableInput, EditablePreview, IconButton, useEditableControls } from '@chakra-ui/react';
import { PopoverForm } from '../UpdateProfile/UpdateProfile';
import { useMeQuery } from '../../generated/graphql';
import { useSelector } from 'react-redux';
import { State } from '../../pages/index';


const user = {
  username: 'Andy',
  address: 'Test Address',
  zipCode: '92071',
  email: 'test@test.com',
  items_owned: [{
    name: 'Item Test',
    id: 1
  }]
}


export default function UserProfile() {
  // const userMe = useSelector((state: State) => state.user);
  // const getMeData = () => {
  //     const [{ data }] = useMeQuery();
  //     return data && data.me;
  //   };
  //   const data = getMeData();
  //   const userMe = useMeQuery();
  //   // if(data) console.log('data ', user)
  //   const [user, setUser] = useState(userMe);

  // useEffect (() => {
  // userMe;
  // setUser(userMe);

  // }, [user, userMe])
  // console.log('user profile', user[0].data.me);


  return (
    <Container>
      <Heading align="center" sx={{ margin: "10px", marginTop: "20px" }}>
        Profile
      </Heading>
      <Container maxW="500px" sx={{ border: "1px solid" }}>
        <Flex direction="row-reverse">
          <PopoverForm/>
          <Wrap justify="left" sx={{ margin: "10px", marginRight: "100px" }}>
            <WrapItem>
              <VStack align="left">
                <Avatar
                  size="lg"
                  name="Random Guy"
                  src="https://bit.ly/dan-abramov"
                />
                <Heading>{user.username}</Heading>
                <Text color="gray">
                  {user.address} {", "} {user.zipCode}
                </Text>
                <Text>{user.email}</Text>
              </VStack>
            </WrapItem>
          </Wrap>
        </Flex>
      </Container>
      <Container mt={4} sx={{ border: "1px solid" }}>
        <VStack sx={{ margin: "10px" }}>
          <Text>{"Current Items"}</Text>
          {user.items_owned?.map((data) => (
            <Tag colorScheme="blue" key={data.id}>
            </Tag>
          ))}
        </VStack>
      </Container>
    </Container>
  );
}




