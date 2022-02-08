import React, { useState, useEffect, SetStateAction, Dispatch } from "react";
import FocusLock from 'react-focus-lock';
import { ChakraProvider, FormLabel, FormControl, Stack, ButtonGroup, Button, Box, Popover, PopoverTrigger, IconButton, PopoverArrow, PopoverContent, PopoverCloseButton, useDisclosure, Input, PopoverHeader, PopoverBody } from "@chakra-ui/react";
import { EditIcon } from '@chakra-ui/icons';



export const PopoverForm = () => {
  const [name, setName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [zipCode, setZipCode] = useState('');

  console.log(name, streetAddress, zipCode)
  interface ReturnType {
    value: boolean
    setValue: Dispatch<SetStateAction<boolean>>
    setTrue: () => void
    setFalse: () => void
    toggle: () => void
  }

  function useBoolean(defaultValue?: boolean): ReturnType {
    const [value, setValue] = useState(!!defaultValue)

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    const toggle = () => setValue(x => !x);

    return { value, setValue, setTrue, setFalse, toggle }
  }


  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  function handleClickSubmit () {
    if (value === false) {
      setValue(true);
      setName('');
      setStreetAddress('');
      setZipCode('');
    } else {
      setValue(false);
      setName('');
      setStreetAddress('');
      setZipCode('');
    }
  }

  return (
    <ChakraProvider>
      <Box p={2}>
        <Popover placement="auto-start" >
          <PopoverTrigger >
            <Button onClick={handleClickSubmit} size="xs" colorScheme="blue" sx={{ marginTop: "10px" }}>
              {value ? "Save" : "Edit"}
            </Button>
          </PopoverTrigger>
          <PopoverContent >
            <FormLabel htmlFor={"Name"}>{"Name"}</FormLabel>
            <Input onChange={(e) => setName(e.target.value)} />
            <FormLabel htmlFor={"Street Address"}>{"Street Address"}</FormLabel>
            <Input onChange={(e) => setStreetAddress(e.target.value)} />
            <FormLabel htmlFor={"Zip Code"}>{"Zip Code"}</FormLabel>
            <Input onChange={(e) => setZipCode(e.target.value)} />
            <PopoverArrow />
          </PopoverContent>
        </Popover>
      </Box>
    </ChakraProvider>
  );
}
