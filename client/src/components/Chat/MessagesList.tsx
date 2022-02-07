import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import { OperationContext } from 'urql';
import {
  useCreateMessageMutation,
  useGetChatMessagesQuery,
} from '../../generated/graphql';
import { ChatInputForm } from './ChatInputForm';

interface MessagesListProps {
  user;
  messages;
}

export const MessagesList: React.FC<MessagesListProps> = ({
  user,
  messages,
}) => {
  return (
    <>
      <Heading sx={hStyle()} size='sm'>
        Your Messages
      </Heading>
      <Box sx={bStyle()}>
        <Box className='messageList'>
          {messages.map((message) => {
            return (
              <>
                <Box sx={msgStyle(user, message)} key={message.id}>
                  <Text sx={txtStyle()}>{message.text}</Text>
                </Box>
                {/* <Text sx={timeStyle()}>{message.createdAt}</Text> */}
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

function bStyle() {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '370px',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
  };
}
function hStyle() {
  return {
    color: 'grey',
  };
}
function msgStyle(user, message) {
  const float =
    user.id === message.authorId
      ? { float: 'right', backgroundColor: 'primary' }
      : { float: 'left', backgroundColor: 'secondary' };
  return {
    ...float,
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    margin: '10px',
    marginBottom: '30px',
    minHeight: '10px',
  };
}

function txtStyle() {
  return {
    margin: '10px',
  };
}

function timeStyle() {
  return {
    color: 'grey',
  };
}
