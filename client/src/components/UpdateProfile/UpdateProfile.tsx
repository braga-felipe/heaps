import React from "react";
import FocusLock from 'react-focus-lock';
import { FormLabel, FormControl, Stack, ButtonGroup, Button, Box, Popover, PopoverTrigger, IconButton, PopoverArrow, PopoverContent, PopoverCloseButton, useDisclosure, Input } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';

const UpdateProfileInput = React.forwardRef((props, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={'Prop Label'}>{props.label}</FormLabel>
      <Input ref={'ref'} id={'props.id'} {...props} />
    </FormControl>
  )
});

const Form = ({ firstFieldRef, onCancel }) => {
  return (
    <Stack spacing={4}>
      <UpdateProfileInput
        label='First name'
        id='first-name'
        ref={firstFieldRef}
        defaultValue='John'
      />
      <UpdateProfileInput label='Last name' id='last-name' defaultValue='Smith' />
      <ButtonGroup d='flex' justifyContent='flex-end'>
        <Button variant='outline' onClick={onCancel}>
          Cancel
        </Button>
        <Button isDisabled colorScheme='teal'>
          Save
        </Button>
      </ButtonGroup>
    </Stack>
  )
}

const PopoverForm = () => {
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  return (
    <>
      <Box d='inline-block' mr={3}>
        John Smith
      </Box>
      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton aria-label="EditIcon" size='sm' icon={<EditIcon />} />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </Popover>
    </>
  )
}