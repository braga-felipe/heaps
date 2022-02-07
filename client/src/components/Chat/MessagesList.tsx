import React from 'react'
import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
} from '@chakra-ui/react';
import { OperationContext } from 'urql';
import { useCreateMessageMutation, useGetChatMessagesQuery } from '../../generated/graphql';
import { ChatInputForm } from './ChatInputForm';
import moment from 'moment';
import { ChatBubble } from './ChatBubble';

interface MessagesListProps {
  messages,
  myID
}

export const MessagesList: React.FC<MessagesListProps> = ({messages, myID}) => {
  
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
                <ChatBubble key={message.id} className={myID === message.authorId ? "myMessage" : "otherMessage"} message={message}>
                  </ChatBubble>
              )})}
          </Box>
        </Box> 
      </>
    );
  
}