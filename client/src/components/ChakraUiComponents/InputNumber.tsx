import React from 'react';
import { Field } from 'formik';
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
} from '@chakra-ui/react';

export default function InputNumber() {
  return (
    <Field name='servings'>
      {({ field, form }) => (
        <FormControl id='servings'>
          <FormLabel htmlFor='servings'>Servings</FormLabel>
          <NumberInput
            max={50} min={1}
            id='servings'
            {...field}
            onChange={(val) =>
              form.setFieldValue(field.name, parseInt(val))
            }
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
      )}
    </Field>
  );
}
