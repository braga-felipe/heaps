import { Box, Button, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import { render } from 'react-dom';
import { useSelector } from 'react-redux';
import { useGetChatMessagesQuery } from '../../generated/graphql';
import { State } from '../../pages';
import { ChatInputForm } from './ChatInputForm';
import { ClaimButton } from './ClaimButton';
import { MessagesList } from './MessagesList';

interface MessagesContainerProps {
  variables;
  myID;
}

export const MessagesContainer: React.FC<MessagesContainerProps> = ({
  variables,
  myID,
}) => {
  const [res, updateMessages] = useGetChatMessagesQuery({
    variables: variables,
  });

  const { data, error, fetching } = res;
  const user = useSelector((state: State) => state.user);
  console.log({ user });

  if (error) {
    console.log(error);
    return <h1>Error Fetching Lobby</h1>;
  }
  if (fetching) {
    return <h1>Fetching Lobby</h1>;
  }

  if (data) {
    const messages = data.getChat.messages;
    const requester = data.getChat.users
      .filter((user) => user.id !== data.getChat.userOwnerId)
      .pop();

    return (
      <>
        <Container sx={cStyle()}>
          <Box display='flex' alignItems='center' flexDirection='row'>
            <Heading>{data.getChat.item.name}</Heading>
            <ClaimButton
              userOwnerId={data.getChat.userOwnerId}
              requesterId={requester.id}
              myID={myID}
              itemID={data.getChat.item.id}></ClaimButton>
          </Box>
          <MessagesList user={user} messages={messages}></MessagesList>
          <ChatInputForm
            chatId={variables.getChatId}
            updateMessages={updateMessages}
            myID={myID}></ChatInputForm>
        </Container>
      </>
    );
  }
};

function cStyle() {
  return {
    margin: '0',
    padding: '0',
    display: 'flex',
    // alignItems: 'center',
    flexDirection: 'column',
    width: '350px',
  };
}
