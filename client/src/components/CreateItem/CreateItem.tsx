import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import CheckBox from '../ChakraUiComponents/Checkbox';
import SubmitButton from '../ChakraUiComponents/Button';
import {
  Heading, FormLabel, CheckboxGroup, Container,
  HStack, NumberInput, NumberInputField, NumberDecrementStepper,
  NumberIncrementStepper, NumberInputStepper, FormControl,
} from '@chakra-ui/react';
import { State } from '../../pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { createOneItem } from '../../redux/actions/items';
import {
  Allergies,
  Diets,
  useCreate_ItemMutation,
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
  const dispatch = useDispatch();
  const [, createFoodItem] = useCreate_ItemMutation();
  const user = useSelector((state: State) => state.user);

  useEffect(() => { });

  return (
    <Container>
      <Heading>Create a Food Item</Heading>
      <Formik
        initialValues={{
          name: '',
          description: '',
          servings: 1,
          ownerId: user.id,
          isGroceries: false,
          allergies: [],
          diets: [],
        }}
        onSubmit={async (values: Values) => {
          const res = await createFoodItem({ options: values })
            .then((res) => {
              console.log(res);
              dispatch(createOneItem(res.data.createItem));
            })
            .then((res) => console.log(res))
            .catch((err) => console.log(err.message));
          console.log(res);
        }}>
        <Form>
          <InputField name='name' />
          <InputField name='description' />
          <CheckBox
            name='Is Groceries'
            group='isGroceries'
            value='isGroceries'
          />
          <HStack>
            <Container>
              <FormLabel>Allergies</FormLabel>
              <CheckboxGroup>
                <CheckBox name='Gluten Free' group='allergies' value='glutenFree' />
                <CheckBox name='Lactose Free' group='allergies' value='lactoseFree' />
                <CheckBox name='Nut Free' group='allergies' value='nutFree' />
              </CheckboxGroup>
            </Container>
            <Container>
              <FormLabel>Diets</FormLabel>
              <CheckboxGroup>
                <CheckBox name='Vegan' group='diets' value='vegan' />
                <CheckBox name='Vegetarian' group='diets' value='vegetarian' />
                <CheckBox name='Pescatarian' group='diets' value='pescatarian' />
              </CheckboxGroup>
            </Container>
          </HStack>
          <FormControl>
            <FormLabel htmlFor='servings'>Servings</FormLabel>
            <NumberInput max={50} min={1}>
              <NumberInputField name='servings' id='servings' value='servings' />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
          <SubmitButton props={props} name='Create Dish' />
        </Form>
      </Formik>
    </Container>
  );
}
