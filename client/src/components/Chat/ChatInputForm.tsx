import { Box, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { OperationContext } from 'urql';
import { useCreateMessageMutation } from '../../generated/graphql';


interface ChatInputFormProps {
  chatId: number,
  updateMessages: (opts?: Partial<OperationContext>) => void,
  myID: number
}

export const ChatInputForm: React.FC<ChatInputFormProps> = ({chatId, updateMessages, myID}) => {
  const [, sendMessage] = useCreateMessageMutation();

  const [message, updateMessage] = useState({
    text: '',
  });

  async function handleSend(message) {
    await sendMessage({ options: {text: message.text, currentUserId: myID, chatId: chatId }});
    updateMessages();
  }
  
  function handleChange(evt) {
    updateMessage({ text: evt.target.value });
    console.log(message);
  }
  
    return (
      <>
      <Box className="inputContainer" display="flex" flex-direction="row">       
        <Input name="chatInput" placeholder="Type your message here" onChange={handleChange}/>
        <Button name="Send" onClick={() => handleSend(message)}>Send Message</Button>
      </Box>
      </>
    );
}