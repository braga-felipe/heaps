import React, { useEffect, useState } from "react";
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
  Flex,
} from "@chakra-ui/react";
import {
  Editable,
  EditableInput,
  EditablePreview,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { PopoverForm } from "../UpdateProfile/UpdateProfile";
import { useMeQuery } from "../../generated/graphql";
import { useSelector } from "react-redux";
import { State } from "../../pages/index";

export default function UserProfile({ handleClickSubmit }) {
  const [res, updateProfile] = useMeQuery();
  const { data, error, fetching } = res;

  if (error) {
    console.log("Error fectching user Profile :", error);
    return <h1>Error Fetching Profile</h1>;
  }
  if (fetching) {
    return <h1>Fetching Profile</h1>;
  }

  if (data) {
    const userProfile = data.me;

    return (
      <Container>
        <Heading align="center" sx={{ margin: "10px", marginTop: "20px" }}>
          Profile
        </Heading>
        <Container maxW="350px" sx={{ border: "1px solid" }}>
          <Flex direction="row-reverse">
            <PopoverForm
              userProfile={userProfile}
              onClick={handleClickSubmit}
            />
            <Wrap justify="left" sx={{ margin: "10px", marginRight: "40px" }}>
              <WrapItem>
                <VStack align="left">
                  <Avatar
                    size="lg"
                    name="Random Guy"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Heading>{userProfile.username}</Heading>
                  <Text color="gray">
                    {userProfile.address} {", "} {userProfile.zipCode}
                  </Text>
                  <Text>{userProfile.email}</Text>
                </VStack>
              </WrapItem>
            </Wrap>
          </Flex>
        </Container>
        <Container mt={4} sx={{ border: "1px solid" }}>
          <VStack sx={{ margin: "10px" }}>
            <Text>{"Current Items"}</Text>
            {userProfile.items_owned?.map((data) => (
              <Tag colorScheme="blue" key={data.id}></Tag>
            ))}
          </VStack>
        </Container>
      </Container>
    );
  }
}
