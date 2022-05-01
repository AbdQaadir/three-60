import { Button, Text } from "@chakra-ui/react";
import { ReactComponent as GoogleIcon } from "../../assets/google.svg";

function GoogleSignup() {
  return (
    <Button
      colorScheme="gray"
      w="full"
      type="button"
      paddingX={0}
      paddingY={7}
      display="flex"
      alignContent="center"
      justifyContent="center"
      gap={3}
    >
      <GoogleIcon />
      <Text fontWeight="light">Sign up with Google</Text>
    </Button>
  );
}

export default GoogleSignup;
