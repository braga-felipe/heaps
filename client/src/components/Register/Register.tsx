import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getInitialUser } from '../../redux/actions/user';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';
import { FormControl, FormLabel, Container, Heading, Text, Link, VStack, HStack, RadioGroup, Radio } from '@chakra-ui/react';
import { useCreate_UserMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import UserAvatar from './UserAvatar';
import Avatar from '../Assets/Avatar';

interface NewUser {
  username: string;
  email: string;
  address: string;
  zipCode: string;
  password: string;
  img_url: string;
}

export default function Register() {
  const [, registerUser] = useCreate_UserMutation();
  const router = useRouter();
  const dispatch = useDispatch();
  const [radio, setRadio] = useState('avatar1');

  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          address: '',
          zipCode: '',
          email: '',
          password: '',
          img_url: '',
        }}
        onSubmit={async (values: NewUser, { setErrors }) => {
          values.img_url = radio;
          const res = await registerUser({ options: values });
          if (res.data?.createUser.errors) {
            setErrors({ email: `${res.data.createUser.errors[0].message}` });
          }
          if (res.data?.createUser.user) {
            dispatch(getInitialUser(res.data.createUser.user));
            router.push('/');
          }
          console.log('values', values);
          console.log('register: ', res);
        }}>
        {({ values }) => (
          <Form id='Register'>
            <Heading>Register</Heading>
            <FormControl as='fieldset'>
              <FormLabel as='legend'>Select a Avatar for your Profile</FormLabel>
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
                    <Radio value='iavatar4' id='4'>
                      <Avatar avatar='avatar4' />
                    </Radio>
                  </VStack>
                </RadioGroup>
                <UserAvatar avatar={radio} />
              </HStack>
            </FormControl>
            <InputField name='username' />
            <InputField name='address' />
            <InputField name='zipCode' />
            <InputField name='email' />
            <InputField name='password' />
            <SubmitButton props={values} name='Register' />
          </Form>
        )}
      </Formik>
      <Container sx={cStyle()}>
        <Text>
          Already have an account? <Link href='/login'>Log in here!</Link>
        </Text>
      </Container>
    </Container>
  );
}

function cStyle() {
  return {
    marginTop: '8px',
    color: 'grey',
    textAlign: 'center',
  };
}
