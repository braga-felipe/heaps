import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { State } from '../../pages';

export default function ItemCardButton({ buttonName, path }) {
  const router = useRouter();
  const user = useSelector((state: State) => state.user);
  function showPageLinked() {
    return Object.keys(user).length
      ? router.push('/' + 'chatLobby/?tid=1&bool=false')
      : router.push('/login');
  }
  return (
    <Button
      mt={4}
      size='xs'
      backgroundColor='secondaryActive'
      color='white'
      onClick={showPageLinked}>
      {buttonName}
    </Button>
  );
}
