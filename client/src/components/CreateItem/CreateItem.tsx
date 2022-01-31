import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import CheckBox from '../ChakraUiComponents/Checkbox';
import SubmitButton from '../ChakraUiComponents/Button';
import { FormLabel, CheckboxGroup } from '@chakra-ui/react';
interface Values {
  name: string;
  description: string;
  servings: number;
  isGroceries: boolean;
  allergies: string[];
  diets: string[];
}

export default function CreateItem(props) {
  return (
    <div>
      <FormLabel>Create a Food Item</FormLabel>
      <Formik
        initialValues={{
          name: '',
          description: '',
          servings: 0,
          isGroceries: false,
          allergies: [],
          diets: [],
        }}
        onSubmit={(values: Values) => {
          console.log('values', values);
        }}>
        <Form>
          <InputField name='Name' />
          <InputField name='Description' />
          <CheckBox name='Is Groceries' group='isGroceries' />
          <FormLabel>Allergies</FormLabel>
          <CheckboxGroup>
            <CheckBox name='Gluten Free' group='allergies' />
            <CheckBox name='Lactose Free' group='allergies' />
            <CheckBox name='Nut Free' group='allergies' />
          </CheckboxGroup>
          <FormLabel>Diets</FormLabel>
          <CheckboxGroup>
            <CheckBox name='Vegan' group='diets' />
            <CheckBox name='Vegetarian' group='diets' />
            <CheckBox name='Pescatarian' group='diets' />
          </CheckboxGroup>
          <SubmitButton props={props} name='Create Dish' />
        </Form>
      </Formik>
    </div>
  );
}
