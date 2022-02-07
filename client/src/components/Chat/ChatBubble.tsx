import { Box } from '@chakra-ui/react';
import React from 'react'

interface ChatBubbleProps {
  message,
  className: string
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({message, className}) => {

    return (
      <Box border="1px solid black" classname={className}>
        <p>{message.text}</p>
        <p>{className}</p>
      </Box>
  );
}