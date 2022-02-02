import React from 'react';
import { Formik, Form, Field } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';

import { useUser_LoginMutation } from '../../generated/graphql';

interface Values {
  email: string;
  password: string;
}
export default function Login() {
  const [, getUser] = useUser_LoginMutation();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={async (values: Values, { setErrors }) => {
        const res = await getUser({ options: values })
        if (res.data?.userLogin.errors) {
          setErrors({ email: `${res.data.userLogin.errors[0].message}`, })
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
  );
}
