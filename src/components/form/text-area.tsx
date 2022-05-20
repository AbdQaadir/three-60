import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";

type TFormTextAreaProps = {
  error: string | undefined;
  name: string;
  label?: string;
  isInvalid: boolean;
  rows: number;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

function FormTextArea({
  size,
  name,
  label,
  error,
  rows,
  isInvalid,
  ...rest
}: TFormTextAreaProps) {
  return (
    <FormControl isInvalid={isInvalid}>
      {label ? (
        <FormLabel fontWeight="light" htmlFor={name}>
          {label}
        </FormLabel>
      ) : (
        <> </>
      )}

      <Textarea isInvalid={isInvalid} rows={rows} name={name} {...rest} />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
}

export default FormTextArea;
