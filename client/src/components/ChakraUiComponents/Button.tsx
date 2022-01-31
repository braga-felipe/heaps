import { Button } from '@chakra-ui/react';

export default function SubmitButton(props) {
  return (
    <Button
      mt={4}
      colorScheme='teal'
      isLoading={props.isSubmitting}
      type='submit'>
      Submit
    </Button>
  );
}
