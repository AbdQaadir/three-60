import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import Header from "../../components/header/header";
import { MdPlusOne } from "react-icons/md";
const Notes = () => {
  return (
    <VStack w="full" h="100vh">
      <Header>Notes</Header>

      <Flex w="full" h="100%">
        <Box flex={2} h="full" bg="gray.100" py={15}>
          <Button
            py={7}
            px={10}
            variant="outline"
            colorScheme="blackAlpha"
            borderTopLeftRadius={30}
            borderBottomRightRadius={30}
            leftIcon={<MdPlusOne />}
          >
            Create Note
          </Button>
        </Box>
        <Box flex={9} h="full" bg="gray.100"></Box>
      </Flex>
    </VStack>
  );
};

export default Notes;
