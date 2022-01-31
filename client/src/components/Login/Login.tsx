import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';
interface Values {
  email: string;
  password: string;
}
export default function Login() {
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
          <SubmitButton props={props} />
        </Form>
      )}
    </Formik>
  );
}
