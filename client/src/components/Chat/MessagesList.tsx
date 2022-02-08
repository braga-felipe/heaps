import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import moment from 'moment';
import { OperationContext } from 'urql';
import {
  useCreateMessageMutation,
  useGetChatMessagesQuery,
} from '../../generated/graphql';
import { ChatInputForm } from './ChatInputForm';
import { ChatBubble } from './ChatBubble';

interface MessagesListProps {
  user;
  messages;
  chatId;
}

export const MessagesList: React.FC<MessagesListProps> = ({
  user,
  messages,
  chatId
}) => {
  const [messageState, updateMessageState] = useState(messages);
  const [, sendMessage] = useCreateMessageMutation();

  async function handleSend(message) {
    const messageSent = await sendMessage({
      options: { text: message.text, currentUserId: user.id, chatId: chatId },
    });
    updateMessageState([...messageState, messageSent.data.createMessage]);
  }

  return (
    <>
      <Heading sx={hStyle()} size='sm'>
        Your Messages
      </Heading>
      <Box sx={bStyle()}>
        {messageState.map((message, index) => {
          return (
            <Box key={index}>
              <Container sx={msgStyle(user, message)} key={message.id}>
                <Text fontSize='lg' sx={txtStyle()}>
                  {message.text}
                </Text>
                {/* <br /> */}
                <Text fontSize='xs' sx={timeStyle()}>
                  {moment(parseInt(message.createdAt)).calendar()}
                </Text>
              </Container>
            </Box>
          );
        })}
      </Box>
      <Box>
            <ChatInputForm
              updateMessages={handleSend}
            ></ChatInputForm>
        </Box>
    </>
  );
};

function bStyle() {
  return {
    width: '100%',
    height: '600px',
    overflowY: 'scroll',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    marginLeft: '5px',
  };
}
function hStyle() {
  return {
    marginLeft: '10px',
    color: 'grey',
  };
}
function msgStyle(user, message) {
  const float =
    user.id === message.authorId
      ? {
          float: 'right',
          backgroundColor: 'primary',
        }
      : {
          float: 'left',
          backgroundColor: 'secondary',
        };
  return {
    ...float,
    color: 'white',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    margin: '5px 5px 0px 5px',
    minHeight: '45px',
    maxWidth: '55%',
  };
}

function txtStyle() {
  return {
    margin: '5px',
  };
}

function timeStyle() {
  return {
    color: 'white',
    textAlign: 'right',
  };
}
