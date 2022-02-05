import React from 'react';
import { Formik, Form } from 'formik';
import { Container, Heading } from '@chakra-ui/react';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';

import { useUser_LoginMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { getInitialUser } from '../../redux/actions/user';

interface User {
  email: string;
  password: string;
}
export default function Login() {
  const [res, getUser] = useUser_LoginMutation();
  console.log('LOGIN DATA: ', res.data?.userLogin.user);
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <Container>
      <Heading>Log In</Heading>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values: User, { setErrors }) => {
          const res = await getUser({ options: values });
          if (res.data?.userLogin.errors) {
            setErrors({ email: `${res.data.userLogin.errors[0].message}` });
          }
          if (res.data?.userLogin.user) {
            dispatch(getInitialUser(res.data.userLogin.user));
            router.push('/');
          }
          console.log('values', values);
          console.log('login: ', res);
        }}>
        {(props) => (
          <Form>
            <InputField name='email' />
            <InputField name='password' />
            <SubmitButton props={props} name='Log In' />
          </Form>
        )}
      </Formik>
    </Container>
  );
}
