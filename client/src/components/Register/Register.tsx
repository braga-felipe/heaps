import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';
interface Values {
  username: string;
  email: string;
  address: string;
  zipCode: string;
  password: string;
}
export default function Register() {
  return (
    <div>
      <Formik
        initialValues={{
          username: '',
          address: '',
          zipCode: '',
          email: '',
          password: '',
        }}
        onSubmit={(values: Values) => {
          console.log('values', values);
        }}>
        {(props) => (
          <Form>
            <h1>Register</h1>
            <InputField name='Username' />
            <InputField name='Address' />
            <InputField name='ZIPCode' />
            <InputField name='Email' />
            <InputField name='Password' />
            <SubmitButton props={props} />
          </Form>
        )}
      </Formik>
    </div>
  );
}
