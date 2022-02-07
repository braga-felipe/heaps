import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { State } from '../../pages';
import { useCreateChatMutation } from '../../generated/graphql';
import checkIfChatExistsAndGenerateLink from '../../utils/checkIfChatExistsAndGenerateLink';

export default function ItemCardButton({ buttonName, path, item }) {
  const router = useRouter();
  const user = useSelector((state: State) => state.user);
  const [, createNewChat] = useCreateChatMutation();

  async function handleClick(item, userID) {
    const url = checkIfChatExistsAndGenerateLink(item, userID);
    if (url) {
      router.push('/' + url);
    } else {
      const newChatID = await createNewChat({options: {userOwnerId: item.ownerId, userRequesterId: userID, itemOwnerId: item.id}});
      router.push('/' + `chatLobby/?tid=${newChatID.data.createChat.id}&bool=true`);
    }
  }

  function checkAuth(item, userID) {
    return Object.keys(user).length
      ? handleClick(item , userID)
      : router.push('/login');
  }

  return (
    <Button
      mt={4}
      size='xs'
      backgroundColor='secondaryActive'
      color='white'
      onClick={() => checkAuth(item, user.id)}>
      {buttonName}
    </Button>
  );
}
