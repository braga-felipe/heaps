import React from 'react';
import { Field } from 'formik';
import { FormLabel, FormControl, Checkbox } from '@chakra-ui/react';

export default function CheckBox({ name, group }) {
  const inputName = name.split(' ').join('').toLowerCase();

  return (
    <Field name={group} value={name}>
      {({ field }) => (
        <FormControl>
          <FormLabel htmlFor={inputName}></FormLabel>
          <Checkbox {...field} id={inputName} value={name}>
            {name}
          </Checkbox>
        </FormControl>
      )}
    </Field>
  );
}
