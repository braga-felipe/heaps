import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';
import { Container, Heading } from '@chakra-ui/react';
import { useCreate_UserMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';

interface NewUser {
  username: string;
  email: string;
  address: string;
  zipCode: string;
  password: string;
}

export default function Register() {

  const [, registerUser] = useCreate_UserMutation();
  const router = useRouter();

  return (
    <Container>
      <Formik
        initialValues={{
          username: '',
          address: '',
          zipCode: '',
          email: '',
          password: '',
        }}
        onSubmit={async (values: NewUser, { setErrors }) => {
          const res = await registerUser({ options: values })
          if (res.data?.createUser.errors) {
            setErrors({ email: `${res.data.createUser.errors[0].message}`, })
          }
          if (res.data?.createUser.user) {

            router.push("/");
          }
          console.log('values', values);
          console.log('register: ', res);
        }}>
        {(props) => (
          <Form>
            <Heading>Register</Heading>
            <InputField name='username' />
            <InputField name='address' />
            <InputField name='zipCode' />
            <InputField name='email' />
            <InputField name='password' />
            <SubmitButton props={props} name='Register' />
          </Form>
        )}
      </Formik>
    </Container>
  );
}
