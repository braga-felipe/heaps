import { Button } from '@chakra-ui/react';

export default function SubmitButton(props) {
  const { name } = props;
  return (
    <Button
      mt={4}
      backgroundColor='secondary'
      color='white'
      isLoading={props.isSubmitting}
      type='submit'>
      {name}
    </Button>
  );
}
