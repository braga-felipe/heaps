import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function ItemCardButton({ buttonName, path }) {
  const router = useRouter();

  function showPageLinked() {
    router.push('/' + `${path}`);
  }
  return (
    <Button
      mt={4}
      size='xs'
      backgroundColor='secondary'
      color='white'
      onClick={showPageLinked}>
      {buttonName}
    </Button>
  );
}
