import { Box, Button, Container } from '@chakra-ui/react';
import React from 'react'
import { render } from 'react-dom';
import { useGetChatMessagesQuery } from '../../generated/graphql';
import { ChatInputForm } from './ChatInputForm';
import { ClaimButton } from './ClaimButton';
import { MessagesList } from './MessagesList';

interface MessagesContainerProps {
  variables;
  myID;
}

export const MessagesContainer: React.FC<MessagesContainerProps> = ({variables, myID}) => {
  const [res, updateMessages] = useGetChatMessagesQuery({variables: variables});  
  const {data, error, fetching } = res;
  if (error) {
    console.log(error);
    return (
      <h1>Error Fetching Lobby</h1>
    );
  }
  if (fetching) {
    return (
      <h1>Fetching Lobby</h1>
    );
  }

  if (data) {
    const messages = data.getChat.messages;
    const requester = data.getChat.users.filter(user => user.id !== data.getChat.userOwnerId).pop();
    
    return (
      <>
       <Container display="flex" alignItems="center" flexDirection="column">
         <Box display="flex" alignItems="center" flexDirection="row"> 
           <h1>{data.getChat.item.name}</h1>
           <ClaimButton userOwnerId={data.getChat.userOwnerId} requesterId={requester.id} myID={myID} itemID={data.getChat.item.id}></ClaimButton>
         </Box>
          <MessagesList messages={messages}></MessagesList>
          <ChatInputForm chatId={variables.getChatId} updateMessages={updateMessages} myID={myID}></ChatInputForm>    
        </Container>
      </>
    );
  }
}