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
  function validateName(value) {
    let error
    if (!value) {
      error = 'Name is required'
    }
    return error
  }
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
        onSubmit={(
          values: Values,

        ) => {
          console.log('values', values);

        }}
      >
        {(props) => (
          <Form>
            <h1>Register</h1>
            <Field name='username' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.username}>
                  <FormLabel htmlFor='username'>Username</FormLabel>
                  <Input {...field} id='username' placeholder='Username' />
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='address' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.address && form.touched.address}>
                  <FormLabel htmlFor='address'>Address</FormLabel>
                  <Input {...field} id='address' placeholder='Address' />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name='zipCode' validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.zipCode && form.touched.zipCode}>
                  <FormLabel htmlFor='zipcode'>ZIP Code</FormLabel>
                  <Input {...field} id='zipcode' placeholder='ZIP Code' />
                  <FormErrorMessage>{form.errors.zipcode}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
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
