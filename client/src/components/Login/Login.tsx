import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
  email: string;
  password: string;
}
export default function Login() {
  return (
    <div>
      <h1>loging</h1>
      <Formik
        initialValues={{
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
          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
          />
          <label htmlFor="password">First Name</label>
          <Field id="password" name="password" placeholder="Password" type='password' />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
