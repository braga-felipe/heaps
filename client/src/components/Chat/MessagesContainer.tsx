import { Box, Button, Container, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useGetChatMessagesQuery, useMarkAsReadMutation } from '../../generated/graphql';
import { State } from '../../pages';
import { ClaimButton } from './ClaimButton';
import { MessagesList } from './MessagesList';

interface MessagesContainerProps {
  chatId;
}

export const MessagesContainer: React.FC<MessagesContainerProps> = ({
  chatId,
}) => {
  //
  const [res, updateMessages] = useGetChatMessagesQuery({
    variables: {
      getChatId: chatId,
    },
  });

  // useEffect(() => {
  //   updateMessages();
  // })

  const { data, error, fetching } = res;
  const user = useSelector((state: State) => state.user);

  if (error) {
    console.log(error);
    return <h1>Error Fetching Lobby</h1>;
  }

  if (fetching) {
    console.log('loading messages');
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
    console.log(messages);
    chatId = data.getChat.id;
    const requester = data.getChat.users
      .filter((user) => user.id !== data.getChat.userOwnerId)
      .pop();

    return (
      <>
        <Container sx={cStyle()}>
          <Box sx={bStyle()} display='flex' alignItems='center' flexDirection='row'>
            <Heading ml='9px' width='195px' isTruncated>
              {data.getChat.item.name}
            </Heading>
            <Container sx={claimStyle()}>
              <ClaimButton
                complete={data.getChat.item.complete}
                takers={data.getChat.item.takers}
                userOwnerId={data.getChat.userOwnerId}
                requesterId={requester.id}
                myID={user.id}
                itemID={data.getChat.item.id}></ClaimButton>
            </Container>
          </Box>
          {/* <Box sx={bStyle()}> */}
          <Container sx={messageStyle()}>
            <MessagesList
              updateMessages={updateMessages}
              user={user}
              messages={messages}
              chatId={chatId}></MessagesList>
          </Container>
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
    marginTop: '3%',
  };
}
function claimStyle() {
  return {
    position: 'fixed',
    marginTop: '30%',
    marginLeft: '50%'
  };
}

function messageStyle() {
  return {
    marginTop: '10%',
  };
}

