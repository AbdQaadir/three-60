import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import Header from "../../components/header/header";
import { MdFolderSpecial, MdMoreHoriz, MdPlusOne } from "react-icons/md";

const Notes = () => {
  return (
    <VStack w="full" h="100vh">
      <Header>Notes</Header>
      <Box w="full" h="100%" bg="gray.100">
        <Container maxW="container.xl" paddingY={10} h="full">
          <Flex w="full" h="100%">
            <Box flex={2} h="full" py={15} px={5}>
              <Button
                py={7}
                px={10}
                variant="outline"
                colorScheme="blackAlpha"
                bg="white"
                borderTopLeftRadius="full"
                borderBottomRightRadius="full"
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
            <Box flex={9}>
              <HStack pb={4}>
                <Heading size="xl" fontWeight={400} textTransform="capitalize">
                  All Notes
                </Heading>
                <Spacer />
                {/* <AddTodoModal>
              {({ handleClick }) => (
                <Button onClick={handleClick}>Create Task</Button>
              )}
            </AddTodoModal> */}
              </HStack>

              <Flex
                gap={4}
                flexWrap="wrap"
                justifyContent="space-between"
                overflowY="scroll"
                maxH={500}
                pr={8}
                h="full"
              >
                {Array(10)
                  .fill(0)
                  .map((_, index) => (
                    <NoteItem />
                  ))}
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </VStack>
  );
};

const NoteItem = () => {
  return (
    <Box w={280} p={5} bg="white">
      <VStack spacing={4}>
        <Heading fontSize="xl" lineHeight={8}>
          Listen to Shaykh Sudais Taraweeh Day 22, 1443AH again and again.
        </Heading>
        <Text color="#777C8E" fontWeight={400}>
          I listened to all tracks on Imaam Sudais’s album and it was :maa shaa
          Allaah:
        </Text>

        <HStack w="full">
          <Badge
            p={3}
            borderRadius="full"
            fontWeight="normal"
            color="blue.900"
            bg="gray.200"
            textTransform="capitalize"
          >
            Personal Note
          </Badge>
          <Spacer />
          <Menu placement="bottom-end">
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<MdMoreHoriz />}
                  variant="outline"
                />

                <MenuList>
                  <MenuItem py={2}>Edit</MenuItem>
                  <MenuItem py={2} color="red">
                    Delete
                  </MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
      </VStack>
    </Box>
  );
};
export default Notes;
