import React, { useState, SetStateAction, Dispatch } from "react";
import {
  ChakraProvider,
  FormLabel,
  Button,
  Box,
  Popover,
  PopoverTrigger,
  PopoverArrow,
  PopoverContent,
  Input,
} from "@chakra-ui/react";
import { useUpdate_UserMutation } from "../../generated/graphql";

interface ReturnType {
  value: boolean;
  setValue: Dispatch<SetStateAction<boolean>>;
  setTrue: () => void;
  setFalse: () => void;
  toggle: () => void;
}

export const PopoverForm = ({ userProfile, onClick }) => {
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [res, updateUser] = useUpdate_UserMutation();

  function useBoolean(defaultValue?: boolean): ReturnType {
    const [value, setValue] = useState(!!defaultValue);

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    const toggle = () => setValue((x) => !x);

    return { value, setValue, setTrue, setFalse, toggle };
  }

  const { value, setValue, setTrue, setFalse, toggle } = useBoolean(false);

  function handleClickSubmit() {
    if (value === false) {
      setValue(true);
    } else {
      setValue(false);
      updateUser({
        options: {
          id: userProfile.id,
          username: name,
          address: streetAddress,
          zipCode: zipCode,
        },
      });
    }
  }

  return (
    <ChakraProvider>
      <Box p={2} sx={{color: 'black'}}>
        <Popover placement="auto-start">
          <PopoverTrigger>
            <Button
              user={userProfile}
              onClick={handleClickSubmit}
              size="xs"
              sx={{ marginTop: "10px", background: "#dfb23f", color: 'white'}}
            >
              {value ? "Save" : "Edit"}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
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
};
