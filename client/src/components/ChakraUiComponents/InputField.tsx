import React from 'react';
import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

export default function InputField({ name }) {
  /* const { name } = props;*/
  const inputName = name.charAt(0).toUpperCase() + name.slice(1);

  function validateName(value) {
    let error;
    if (!value) {
      error = `${name} is required`;
    }
    return error;
  }
  return (
    <Field name={name} validate={validateName}>
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel htmlFor={name}>{inputName}</FormLabel>
          <Input
            {...field}
            id={name}
            placeholder={name}
            type={name === 'password' ? 'password' : 'text'}
          />
          <FormErrorMessage>{form.errors[name]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}
