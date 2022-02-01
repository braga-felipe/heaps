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
            <InputField name='username' />
            <InputField name='address' />
            <InputField name='zipCode' />
            <InputField name='email' />
            <InputField name='password' />
            <SubmitButton props={props} name='Register' />
          </Form>
        )}
      </Formik>
    </div>
  );
}
