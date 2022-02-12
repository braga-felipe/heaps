import { Box, Container, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useCreateMessageMutation } from '../../generated/graphql';
import { ChatInputForm } from './ChatInputForm';
import { ChatBubble } from './ChatBubble';
interface MessagesListProps {
  user;
  messages;
  chatId;
  updateMessages;
}

export const MessagesList: React.FC<MessagesListProps> = ({
  user,
  messages,
  chatId,
  updateMessages,
}) => {
  const [messageState, updateMessageState] = useState(messages);
  const [, sendMessage] = useCreateMessageMutation();

  useEffect(() => {
    updateMessageState(messages);
  }, [messages]);

  async function handleSend(message) {
    try {
      const messageSent = await sendMessage({
        options: { text: message.text, currentUserId: user.id, chatId: chatId },
      });
      updateMessageState([...messageState, messageSent.data.createMessage]);
      // await updateMessages();
      console.log({ messageSent });
    } catch (error) {
      console.log({ error });
    }
  }

  return (
    <>
      <Heading sx={hStyle()} size='sm'>
        Your Messages
      </Heading>
      <Box sx={bStyle()}>
        {messageState.map((message, index) => {
          return (
            <ChatBubble key={index} userId={user.id} message={message}>
              {' '}
            </ChatBubble>
          );
        })}
      </Box>
      <Box>
        <ChatInputForm updateMessages={handleSend}></ChatInputForm>
      </Box>
    </>
  );
};

function bStyle() {
  return {
    width: '100%',
    height: '620px',
    overflowY: 'scroll',
    borderRadius: '15px',
    border: '1px solid #E2E8F0',
    marginLeft: '1.5%',
    marginBottom: '4%',
    marginTop: '2%',
  };
}
function hStyle() {
  return {
    marginLeft: '10px',
    color: 'grey',
    marginTop: '2%',
    marginBottom: '2%',
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
