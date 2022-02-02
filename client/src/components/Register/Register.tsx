import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/user';
import { useCreate_UserMutation } from '../../generated/graphql';
import { useRouter } from 'next/router';

interface NewUser {
  username: string;
  email: string;
  address: string;
  zipCode: string;
  password: string;
}
export interface State {
  user?;
  items?;
}
export default function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const [, registerUser] = useCreate_UserMutation();
  const router = useRouter();

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
        onSubmit={async (values: NewUser, { setErrors }) => {
          const res = await registerUser({ options: values })
          if (res.data?.createUser.errors) {
            setErrors({ email: `${res.data.createUser.errors[0].message}`, })
          }
          if (res.data?.createUser.user) {

            router.push("/");
          }
          console.log('values', values);
          console.log('register: ', res);
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
