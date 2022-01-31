import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

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
      <h1>Register</h1>
      <Formik
        initialValues={{
          username: '',
          address: '',
          zipCode: '',
          email: '',
          password: '',
        }}
        onSubmit={(
          values: Values,

        ) => {
          console.log('values', values);

        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="username" name="username" placeholder="username" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />

          <label htmlFor="address">Address</label>
          <Field id="address" name="address" placeholder="Address" />

          <label htmlFor="zipcode">ZIP Code</label>
          <Field id="zipcode" name="zipCode" placeholder="ZIP Code" />

          <label htmlFor="password">First Name</label>
          <Field id="password" name="password" placeholder="Password" type='password' />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
