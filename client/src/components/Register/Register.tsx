import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import SubmitButton from '../ChakraUiComponents/Button';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/user';
import { useCreate_UserMutation } from '../../generated/graphql';
interface Values {
  username: string;
  email: string;
  address: string;
  zipCode: string;
  password: string;
}
interface State {
  user?;
  items?;
}
export default function Register() {
  const dispatch = useDispatch();
  const user = useSelector((state: State) => state.user);
  const [, registerUser] = useCreate_UserMutation();
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
        onSubmit={async (values: Values) => {
          await registerUser({ options: values }).then((res) =>
            dispatch(register(res.data.createUser.user))
          );
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
