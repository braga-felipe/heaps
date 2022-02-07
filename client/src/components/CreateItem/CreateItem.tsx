import React from 'react';
import Auth from '../Auth';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import InputField from '../ChakraUiComponents/InputField';
import InputNumber from '../ChakraUiComponents/InputNumber';
import CheckBox from '../ChakraUiComponents/Checkbox';
import CreateCooking from '../Assets/CreateCooking';
import SubmitButton from '../ChakraUiComponents/Button';
import {
  HStack,
  Button,
  Heading,
  FormLabel,
  CheckboxGroup,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import { State } from '../../pages/index';
import { useDispatch, useSelector } from 'react-redux';
import { createOneItem } from '../../redux/actions/items';
import CompletePopUp from '../Assets/CompletePopUp';
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
  const router = useRouter();
  // hook for modal
  const { isOpen, onOpen, onClose } = useDisclosure();
  function goToHomePage() {
    router.push('/');
  }

  return (
    <Auth>
      <Container>
        <CreateCooking />
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
          onSubmit={async (values: Values, actions) => {
            const res = await createFoodItem({ options: values })
              .then((res) => {
                console.log(res);
                dispatch(createOneItem(res.data.createItem));
              })
              .then((res) => console.log(res))
              .catch((err) => console.log(err.message));
            console.log(res);
            actions.resetForm();

            onOpen();
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
                  <CheckBox
                    name='Gluten Free'
                    group='allergies'
                    value='glutenFree'
                  />
                  <CheckBox
                    name='Lactose Free'
                    group='allergies'
                    value='lactoseFree'
                  />
                  <CheckBox name='Nut Free' group='allergies' value='nutFree' />
                </CheckboxGroup>
              </Container>
              <Container>
                <FormLabel>Diets</FormLabel>
                <CheckboxGroup>
                  <CheckBox name='Vegan' group='diets' value='vegan' />
                  <CheckBox
                    name='Vegetarian'
                    group='diets'
                    value='vegetarian'
                  />
                  <CheckBox
                    name='Pescatarian'
                    group='diets'
                    value='pescatarian'
                  />
                </CheckboxGroup>
              </Container>
            </HStack>
            <InputNumber />
            <SubmitButton props={props} name='Create Dish' />
          </Form>
        </Formik>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Success!</ModalHeader>
            <ModalBody pb={6}>
              <CompletePopUp />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' onClick={onClose} mr={3}>
                Back to form
              </Button>
              <Button onClick={goToHomePage}>Go to Home Page</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Auth>
  );
}
