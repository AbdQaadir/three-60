import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";

type TextInputProps = {
  label: string;
  name: string;
  error: string | undefined;
  isInvalid: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
function TextInput({
  label,
  name,
  error,
  isInvalid,
  ...props
}: TextInputProps) {
  console.log({ props });
  return (
    <>
      <FormControl isInvalid={isInvalid}>
        {label ? (
          <FormLabel fontWeight="light" htmlFor={name}>
            {label}
          </FormLabel>
        ) : (
          <> </>
        )}

        <Input {...props} name={name} size="md" />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    </>
  );
}

export default TextInput;
