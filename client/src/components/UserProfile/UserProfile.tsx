import React, { useEffect, useState } from "react";
import {
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  Flex,
} from "@chakra-ui/react";
import { PopoverForm } from "../UpdateProfile/UpdateProfile";
import { useMeQuery } from "../../generated/graphql";
import { useSelector } from "react-redux";
import { State } from "../../pages/index";
import Avatar from "../Assets/Avatar";
import ItemList from '../../components/ItemList/ItemList';

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
      <Container >
        <Heading align="center" sx={{ margin: "10px", marginTop: "20px" }}>
          Profile
        </Heading>
        <Container maxW="350px" sx={cStyle()}>
          <Flex direction="row-reverse">
            <PopoverForm
              userProfile={userProfile}
              onClick={handleClickSubmit}
            />
            <Wrap justify="left" sx={{ margin: "10px", marginRight: "40px" }}>
              <WrapItem >
                <VStack align="left" width="100%">
                  <Avatar
                    avatar={data.me.img_url}
                  />
                  <Heading>{userProfile.username}</Heading>
                  <Text >
                   {`${userProfile.address}, ${userProfile.zipCode}`}
                  </Text>
                  <Text>{userProfile.email}</Text>
                </VStack>
              </WrapItem>
            </Wrap>
          </Flex>
        </Container>
      </Container>
    );
  }
}

function cStyle() {
  return {
    boxSizing: 'none',
    border: '1px solid',
    marginTop: '10px',
    marginLeft: '15px',
    color: 'white',
    width: '90%',
    background: 'primary',
    borderRadius: ' 10px',
    boxShadow: '3px 3px 10px rgba(116, 65, 0, 0.4)',
    fontFamily: 'Roboto'

  };
}