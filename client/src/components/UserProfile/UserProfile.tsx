import React from "react";
import {
  Container, Heading, Text, VStack, HStack, Tag, Avatar, Wrap, WrapItem, Button, ButtonGroup
} from "@chakra-ui/react";
import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";

const data = {
  id: 1,
  username: "Andy",
  password: "12345",
  email: "andy@gmail.com",
  address: "Hasenheide 65",
  zipCode: "10967",
  SICK_points: 1,
  img_url: 'localhost:3000',
  itemsAvailable: [
    {
      _id: 1,
      isGroceries: false,
      name: "Risotto",
      description: "Pear risotto",
      ownerId: 1,
      servings: 4,
      complete: false,
      archive: false,
      allergies: ["gluten-free"],
      diets: [],
      SICK_points: 0,
    },
    {
      _id: 2,
      name: "Risotto",
      isGroceries: false,
      description: "Pear risotto",
      servings: 0,
      ownerId: 2,
      complete: true,
      archive: false,
      allergies: [],
      diets: [],
      SICK_points: 0,
    },
  ],
  itemsTaken: [
    {
      _id: 2,
      name: "Risotto",
      isGroceries: false,
      description: "Pear risotto",
      servings: 0,
      ownerId: 2,
      complete: true,
      archive: false,
      allergies: [],
      diets: [],
      SICK_points: 0,
    },
  ],
};

export default function UserProfile() {


  return (
    <Container maxW='container.md' mt={4}>
      <Wrap>
      <WrapItem>
    <Avatar size="lg" name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
        <VStack>
          <Heading>{data.username}</Heading>
          <Text color="gray">
            {data.address} {", "} {data.zipCode}
          </Text>
          <Text>{data.email}</Text>
        </VStack>
        </WrapItem>
        <Button colorScheme='blue'>Edit Profile</Button>
        <Text>{'Current Items'}</Text>
        </Wrap>
      <VStack>
        {data.itemsAvailable.map((data) => (
          <Tag colorScheme="blue" key={data._id}>
            {data.name}
          </Tag>
        ))}
      </VStack>
    </Container>
  );
}
