import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useGetChatMessagesQuery } from '../../generated/graphql';
import { Box, Button, Container, Input } from '@chakra-ui/react';
import { useCreateMessageMutation } from '../../generated/graphql';
import { ChatInputForm } from '../../components/Chat/ChatInputForm';
import { useMeQuery } from '../../generated/graphql';
import { MessagesContainer } from '../../components/Chat/MessagesContainer';

export default function Messages() {
  const router = useRouter();
  const [meResult , updateMe] = useMeQuery();
 
  if (!meResult.data) {
    return (<h1>Authenticating</h1>)
  }
  const myID = meResult.data.me.id;

  const { id } = router.query;
  if (!id) {
    return (<h1> loading </h1>);
  } 
  const variables= {
    getChatId: Array.isArray(id) ? parseInt(id[0]) : parseInt(id)
  }
  //URQL Hooks
  return(
    <>
      <MessagesContainer variables={variables} myID={myID}></MessagesContainer>
    </>
  );
}

