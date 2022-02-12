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
  FormControl,
  FormLabel,
  Radio,
  RadioGroup
} from "@chakra-ui/react";
import { Formik, Form } from 'formik';
import { PopoverForm } from "../UpdateProfile/UpdateProfile";
import { useMeQuery, useUpdate_UserMutation } from "../../generated/graphql";
import { useSelector } from "react-redux";
import { State } from "../../pages/index";
import SubmitButton from "../ChakraUiComponents/Button";
import Avatar from "../Assets/Avatar";
import UserAvatar from "../Register/UserAvatar";
import ItemList from '../../components/ItemList/ItemList';
import { user } from "../../redux/reducers/user";
import { useRouter } from 'next/router';
import { Console } from "console";

export default function UserProfile({ handleClickSubmit }) {
  const router = useRouter();
  const [res, updateProfile] = useMeQuery();
  const { data, error, fetching } = res;
  const [radio, setRadio] = useState('');
  const [newImg, setNewImg] = useState('');
  const [, updateImg] = useUpdate_UserMutation();

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
                  <Avatar avatar={data.me.img_url} />
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
        <Container sx={pStyle()}>
          <Formik
            initialValues={{
              id: userProfile.id,
              img_url: userProfile.img_url
            }}
            onSubmit={(values, actions) => {
              console.log('avatar', values, actions)
              values.img_url = radio;
              updateImg({ options: { id: values.id, img_url: values.img_url } });

            }}
          >
            {({ values }) => (
              <Form >
                <FormControl as='fieldset'>
                  <FormLabel as='legend'>
                    Select a Avatar for your Profile
                  </FormLabel>
                  <HStack>
                    <RadioGroup onChange={setRadio} value={radio}>
                      <VStack spacing='24px'>
                        <Radio value='avatar1' id='1'>
                          <Avatar avatar='avatar1' />
                        </Radio>
                        <Radio value='avatar2' id='2'>
                          <Avatar avatar='avatar2' />
                        </Radio>
                        <Radio value='avatar3' id='3'>
                          <Avatar avatar='avatar3' />
                        </Radio>
                        <Radio value='avatar4' id='4'>
                          <Avatar avatar='avatar4' />
                        </Radio>
                      </VStack>
                    </RadioGroup>
                    {radio.length ? <UserAvatar avatar={radio} /> : <UserAvatar avatar={data.me.img_url} />}
                  </HStack>
                </FormControl>
                <SubmitButton props={values} name='Save' />
              </Form>
            )}
          </Formik>
        </Container>
      </Container >
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
function pStyle() {
  return {
    boxSizing: 'none',
    border: '1px solid',
    marginTop: '10px',
    marginLeft: '15px',
    color: 'white',
    width: '90%',
    fontFamily: 'Roboto'

  };
}