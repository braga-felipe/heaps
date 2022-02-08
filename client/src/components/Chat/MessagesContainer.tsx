import { Box, Button, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useGetChatMessagesQuery } from '../../generated/graphql';
import { State } from '../../pages';
import { ClaimButton } from './ClaimButton';
import { MessagesList } from './MessagesList';

interface MessagesContainerProps {
  chatId;
}

export const MessagesContainer: React.FC<MessagesContainerProps> = ({
  chatId,
}) => {
  const [res, updateMessages] = useGetChatMessagesQuery({
    variables: {
      getChatId: chatId,
    },
  });

  const { data, error, fetching } = res;
  const user = useSelector((state: State) => state.user);

  if (error) {
    console.log(error);
    return <h1>Error Fetching Lobby</h1>;
  }

  if (fetching) {
    return (
      <>
        <Container sx={cStyle()}>
          <Box display='flex' alignItems='center' flexDirection='row'>
            <Heading ml='9px'>Chat Loading</Heading>
          </Box>
        </Container>
      </>
    );
  }

  if (data) {
    const messages = data.getChat.messages;
    chatId = data.getChat.id;
    const requester = data.getChat.users
      .filter((user) => user.id !== data.getChat.userOwnerId)
      .pop();

    return (
      <>
        <Container sx={cStyle()}>
          <Box display='flex' alignItems='center' flexDirection='row'>
            <Heading ml='9px' width='195px' isTruncated>
              {data.getChat.item.name}
            </Heading>
            <ClaimButton
              userOwnerId={data.getChat.userOwnerId}
              requesterId={requester.id}
              myID={user.id}
              itemID={data.getChat.item.id}></ClaimButton>
          </Box>
          {/* <Box sx={bStyle()}> */}
          <MessagesList
            user={user}
            messages={messages}
            chatId={chatId}></MessagesList>
          {/* </Box> */}
        </Container>
      </>
    );
  }
};

function cStyle() {
  return {
    margin: '15px 5px 5px 5px',
    padding: '0',
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    width: '95%',
  };
}

function bStyle() {
  return {
    width: '100%',
    height: '655px',
    overflowY: 'scroll',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    marginLeft: '5px',
    marginTop: '8px',
  };
}
