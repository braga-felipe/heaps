import React from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import CheckBox from '../ChakraUiComponents/Checkbox';
import SubmitButton from '../ChakraUiComponents/Button';
import { FormLabel, CheckboxGroup } from '@chakra-ui/react';

import {
  useCreate_ItemMutation,
  Allergies,
  Diets,
} from '../../generated/graphql';
interface Values {
  name: string;
  description: string;
  servings: number;
  ownerId: number;
  isGroceries: boolean;
  allergies: Allergies[];
  diets: Diets[];
}

export default function CreateItem(props) {
  const [, createFoodItem] = useCreate_ItemMutation();
  return (
    <div>
      <FormLabel>Create a Food Item</FormLabel>
      <Formik
        initialValues={{
          name: '',
          description: '',
          servings: 0,
          ownerId: 1,
          isGroceries: false,
          allergies: [],
          diets: [],
        }}
        onSubmit={async (values: Values) => {
          const res = await createFoodItem({ options: values });
          console.log('values', values);
          console.log('res: ', res);
          return res;
        }}>
        <Form>
          <InputField name='Name' />
          <InputField name='Description' />
          <CheckBox
            name='Is Groceries'
            group='isGroceries'
            value='isGroceries'
          />
          <FormLabel>Allergies</FormLabel>
          <CheckboxGroup>
            <CheckBox name='Gluten Free' group='allergies' value='glutenFree' />
            <CheckBox
              name='Lactose Free'
              group='allergies'
              value='lactoseFree'
            />
            <CheckBox name='Nut Free' group='allergies' value='nutFree' />
          </CheckboxGroup>
          <FormLabel>Diets</FormLabel>
          <CheckboxGroup>
            <CheckBox name='Vegan' group='diets' value='vegan' />
            <CheckBox name='Vegetarian' group='diets' value='vegetarian' />
            <CheckBox name='Pescatarian' group='diets' value='pescatarian' />
          </CheckboxGroup>
          <SubmitButton props={props} name='Create Dish' />
        </Form>
      </Formik>
    </div>
  );
}
