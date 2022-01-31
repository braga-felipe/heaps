import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { FormControl, FormLabel, Input, FormErrorMessage, Button } from "@chakra-ui/react";

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
        {(props) => (
          <Form>
            <Field name='email' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input {...field} id='email' placeholder='email' />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='password' >
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel htmlFor='password'>Password</FormLabel>
                  <Input {...field} id='password' placeholder='password' type='password' />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme='teal'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
