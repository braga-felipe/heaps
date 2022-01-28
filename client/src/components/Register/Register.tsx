import React from 'react';
import { Formik, Form } from 'formik';
import { FormControl, FormLabel } from '@chakra-ui/react';

export default function Register() {
  return (
    <Formik
      initialValues={{ username: '', password: '', email: '', address: '', zipcode: '' }}
      onSubmit={(values) => { console.log(values) }}
    >
      {(values, handleChange) => (
        <Form>
          <h1>Register</h1>
          <FormControl>
            <FormLabel htmlFor='r-username'>Username</FormLabel>
            <input className='username'
              value={values.username} onChange={handleChange}
              id='r-username' placeholder='username'
            />
            <FormLabel htmlFor='r-password'>Password</FormLabel>
            <input className='register-password'
              value={values.password} onChange={handleChange}
              id='r-password' placeholder='password'
            />
            <FormLabel htmlFor='r-emal'>Email</FormLabel>
            <input className='register-email'
              value={values.email} onChange={handleChange}
              id='r-email' placeholder='email'
            />
            <FormLabel htmlFor='r-address'>Adress</FormLabel>
            <input className='address'
              value={values.address} onChange={handleChange}
              id='r-address' placeholder='address'
            />
            <FormLabel htmlFor='r-zipcode'>Zipcode</FormLabel>
            <input className='zipcode'
              value={values.zipcode} onChange={handleChange}
              id='r-zipcode' placeholder='zipcode'
            />
          </FormControl>
        </Form>
      )}
    </Formik >
  );
}
