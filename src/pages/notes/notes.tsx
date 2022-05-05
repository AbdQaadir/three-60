import {
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/header/header";
import { MdFolderSpecial, MdPlusOne } from "react-icons/md";
const Notes = () => {
  return (
    <VStack w="full" h="100vh">
      <Header>Notes</Header>

      <Flex w="full" h="100%">
        <Box flex={2} h="full" bg="gray.100" py={15} px={5}>
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

          <Flex
            flexDir="column"
            gap={5}
            w="full"
            marginTop={20}
            color="gray.500"
            fontWeight="light"
          >
            <HStack cursor="pointer">
              <Flex alignItems="center" gap={3}>
                <MdFolderSpecial />
                <Text>Personal Note</Text>
              </Flex>
              <Spacer />
              <Badge
                px={3}
                py={2}
                bg="blue.100"
                borderRadius="full"
                color="inherit"
                fontWeight="light"
              >
                4
              </Badge>
            </HStack>

            <HStack cursor="pointer">
              <Flex alignItems="center" gap={3}>
                <MdFolderSpecial />
                <Text>Expenses</Text>
              </Flex>
              <Spacer />
              <Badge
                px={3}
                py={2}
                bg="blue.100"
                borderRadius="full"
                color="inherit"
                fontWeight="light"
              >
                4
              </Badge>
            </HStack>
          </Flex>
        </Box>
        <Box flex={9} h="full" bg="gray.100"></Box>
      </Flex>
    </VStack>
  );
};

export default Notes;
