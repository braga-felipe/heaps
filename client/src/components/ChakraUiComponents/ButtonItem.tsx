import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function ItemButton({ name, pagePath }) {
  const router = useRouter();

  function showPageLinked() {
    router.push('/' + `${pagePath}`);
  }
  return (
    <Button
      mt={4}
      backgroundColor='secondary'
      color='white'
      onClick={showPageLinked}>
      {name}
    </Button>
  );
}
