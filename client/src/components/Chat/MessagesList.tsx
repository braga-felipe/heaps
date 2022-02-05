import { Container, Box } from '@chakra-ui/react';
import React from 'react'
import { OperationContext } from 'urql';
import { useCreateMessageMutation, useGetChatMessagesQuery } from '../../generated/graphql';
import { ChatInputForm } from './ChatInputForm';

interface MessagesListProps {
  messages;
}

export const MessagesList: React.FC<MessagesListProps> = ({messages}) => {
  
    return (
      <>
        <h1>Your Messages</h1>   
        <Box width='400px'
            borderRadius='15px'
            border='1px solid #E2E8F0'
            alignItems='center'>
          <Box className="messageList">
            {messages.map(message => {
              return (
                <Box key={message.id} border="1px solid black">
                <p>{message.text}</p>
                <p>{message.createdAt}</p>
                </Box>
              )})}
          </Box>
        </Box> 
      </>
    );
  
}