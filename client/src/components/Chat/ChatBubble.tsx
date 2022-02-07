import { Box } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react'

interface ChatBubbleProps {
  message,
  className: string
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({message, className}) => {

  const parsedDate = moment.utc(message.createdAt).local().format();
    return (
      <Box border="1px solid black" classname={className}>
        <p>{message.text}</p>
        <p>{parsedDate}</p>
      </Box>
  );
}