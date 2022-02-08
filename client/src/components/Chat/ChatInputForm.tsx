import { Box, Input, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { OperationContext } from 'urql';
import { useCreateMessageMutation } from '../../generated/graphql';

interface ChatInputFormProps {
  updateMessages: (opts?: Partial<OperationContext>) => void;
}

export const ChatInputForm: React.FC<ChatInputFormProps> = ({

  updateMessages,

}) => {

  const [message, updateMessage] = useState({
    text: '',
  });

  function handleChange(evt) {
    updateMessage({ text: evt.target.value });
  }

  return (
    <>
      <Box width='100%' display='flex' flex-direction='row'>
        <Input
          value={message.text}
          width='300px'
          margin='3px 3px 0px 3px'
          name='chatInput'
          placeholder='Type your message here'
          onChange={handleChange}
        />
        <Button
          background='primaryActive'
          color='white'
          margin='3px 3px 0px 3px'
          name='Send'
          type='submit'
          onClick={(event) => {
            event.preventDefault();
            updateMessages(message);
            updateMessage({text:''});
          }}>
          Send
        </Button>
      </Box>
    </>
  );
};
