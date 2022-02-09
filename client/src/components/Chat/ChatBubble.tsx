import { Box, Container, Heading, Text } from '@chakra-ui/react';
import moment from 'moment';
import React, { useEffect } from 'react'
import { useMarkAsReadMutation } from '../../generated/graphql';

interface ChatBubbleProps {
  message,
  userId
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({message, userId}) => {
  
  const [ , markAsRead ] = useMarkAsReadMutation();
  useEffect(() => {
    async function checkMessage(message, userId) {
      if (!message.isRead && message.authorId !== userId) {
        await markAsRead({markAsReadId: message.id});
      }
    }
    checkMessage(message, userId);
  },[message])
//

    return (
      <Box>
        <Container sx={msgStyle(userId, message)} key={message.id}>
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
}

function msgStyle(userId, message) {
  const float =
    userId === message.authorId
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