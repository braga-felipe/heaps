import React from 'react';
import { Formik, Field, Form } from 'formik';

interface Values {
  name: string;
  description: string;
  servings: number;
  isGroceries: boolean;
  allergies: string[];
  diets: string[];
}

export default function CreateItem() {
  return (
    <div>
      <h1>Create Item</h1>
      <Formik
        initialValues={{
          name: '',
          description: '',
          servings: 0,
          isGroceries: false,
          allergies: [],
          diets: [],
        }}
        onSubmit={(
          values: Values,

        ) => {
          console.log('values', values);

        }}
      >
        <Form>
          <label htmlFor="name">Food Item</label>
          <Field id="name" name="name" placeholder="Food Item" />

          <label htmlFor="description">Description</label>
          <Field id="description" name="description" placeholder="Description" />

          <label htmlFor="isGroceries">Check if is Groceries</label>
          <Field id="isGroceries" name="isGroceries" type='checkbox' />
          <div>
            <label >
              Allergies
              <label htmlFor="glutenFree">Gluten Free</label>
              <Field id="glutenFree" value='Gluten Free' type='checkbox' name='allergies' />
              <label htmlFor="lactoseFree">Lactose Free</label>
              <Field id="lactoseFree" value='Lactose Free' type='checkbox' name='allergies' />
              <label htmlFor="nutFree">Nut Free</label>
              <Field id="nutFree" value='Nut Free' type='checkbox' name='allergies' />
            </label>
          </div>
          <div>
            <label >
              Diets
              <label htmlFor="vegan">Vegan</label>
              <Field id="vegan" value='Vegan' type='checkbox' name='diets' />
              <label htmlFor="vegetarian">Vegetarian</label>
              <Field id="vegetarian" value='Vegetarian' type='checkbox' name='diets' />
              <label htmlFor="pescatarian">Pecatarian</label>
              <Field id="pescatarian" value='Pescatarian' type='checkbox' name='diets' />
            </label>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
