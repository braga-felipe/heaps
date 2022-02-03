import { Button } from '@chakra-ui/react';

export default function SubmitButton(props) {
  const { name } = props;
  return (
    <Button
      mt={4}
      colorScheme='teal'
      isLoading={props.isSubmitting}
    >
      {name}
    </Button>
  );
}