import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';

import { useGet_User_By_IdQuery } from '../../generated/graphql';

interface Values {
  email: string;
  password: string;
}
export default function Login() {
  const [, getUser] = useGet_User_By_IdQuery();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values: Values) => {
        console.log('values', values);
      }}>
      {(props) => (
        <Form>
          <InputField name='Email' />
          <InputField name='Password' />
          <SubmitButton props={props} name='Log In' />
        </Form>
      )}
    </Formik>
  );
}
