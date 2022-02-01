import React from 'react';
import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function InputField(props) {
  const { name } = props;
  const inputName = name.split(' ').join('').toLowerCase();

  function validateName(value) {
    let error;
    if (!value) {
      error = `${name} is required`;
    }
    return error;
  }
  return (
    <Field name={inputName} validate={validateName}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors[inputName] && form.touched[inputName]}>
          <FormLabel htmlFor={inputName}>{name}</FormLabel>
          <Input
            {...field}
            id={inputName}
            placeholder={name}
            type={name === 'Password' ? 'password' : 'text'}
          />
          <FormErrorMessage>{form.errors[inputName]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
