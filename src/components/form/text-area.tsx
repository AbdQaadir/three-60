import { Text, Textarea } from "@chakra-ui/react";

type TFormTextAreaProps = {
  error: string | undefined;
  isInvalid: boolean;
  rows: number;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;

function FormTextArea({
  size,
  error,
  rows,
  isInvalid,
  ...rest
}: TFormTextAreaProps) {
  return (
    <>
      {error ? <Text>{error}</Text> : <></>}
      <Textarea isInvalid={isInvalid} rows={rows} {...rest} />
    </>
  );
}

export default FormTextArea;
