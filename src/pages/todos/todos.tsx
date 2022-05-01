import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Header from "../../components/header/header";
import { data } from "../../dump";
import { MdMoreHoriz } from "react-icons/md";

type TodoProps = {
  id: number;
  title: string;
  status: string;
  userId: number;
};
const Todos = () => {
  return (
    <VStack w="full" h="100vh">
      <Header>Todos</Header>

      <Flex w="full" h="100%">
        <Box flex={4} h="full" bg="gray.100">
          <Container maxW="container.lg" paddingY={10} h="full">
            <Flex w="full" h="full">
              <Box
                flex={{ base: 0, md: 2 }}
                height="full"
                alignItems="center"
                display="flex"
                justifyContent="center"
              >
                <TodoSidebar />
              </Box>
              <Box flex={{ base: 1, md: 10 }} h="full">
                <HStack pb={4}>
                  <Heading size="lg">All Todos</Heading>
                  <Spacer />
                  <Button colorScheme="green">Create Task</Button>
                </HStack>

                <VStack
                  alignItems="flex-start"
                  spacing={5}
                  h="full"
                  maxH={500}
                  overflowY="scroll"
                >
                  {data?.map((todo: TodoProps) => (
                    <TodoItem {...todo} />
                  ))}
                </VStack>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box flex={2} h="full">
          3
        </Box>
      </Flex>
    </VStack>
  );
};

const TodoItem = ({ id, status, title, userId }: TodoProps) => {
  return (
    <Flex
      bg="white"
      w="full"
      p={4}
      borderRadius={1}
      alignItems="center"
      justifyContent="space-around"
      fontSize=".9em"
    >
      <Box width="65%">
        <Text fontWeight={500}>{title}</Text>
        <Text color="gray.500">Created on 13 July, 2019 at 08:33AM</Text>
      </Box>

      <Box>
        <Badge
          borderRadius="full"
          px="2"
          colorScheme="teal"
          w={110}
          p={2}
          textAlign="center"
          fontWeight="light"
          fontSize=".7em"
        >
          {status}
        </Badge>
      </Box>
      <Box>
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Text}
                cursor="pointer"

                // rightIcon={<ChevronDownIcon />}
              >
                <Icon as={MdMoreHoriz} />
              </MenuButton>
              <MenuList>
                <MenuItem>Mark as Complete</MenuItem>
                <MenuItem>Edit</MenuItem>
                <MenuItem onClick={() => alert("Kagebunshin")}>Delete</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </Flex>
  );
};
const TodoSidebar = () => {
  return (
    <VStack
      spacing={5}
      borderRadius={30}
      bg="white"
      paddingY={10}
      paddingX={3}
      boxShadow="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);"
      fontSize=".9em"
    >
      <VStack textAlign="center" alignItems="center" cursor="pointer">
        <Text>All Todos</Text>
        <Wrap>
          <WrapItem>
            <Avatar size="sm" name="3" />
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack textAlign="center" alignItems="center" cursor="pointer">
        <Text>Backlogs</Text>
        <Wrap>
          <WrapItem>
            <Avatar size="sm" name="3" />
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack textAlign="center" alignItems="center" cursor="pointer">
        <Text>In Progress</Text>
        <Wrap>
          <WrapItem>
            <Avatar size="sm" name="3" />
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack textAlign="center" alignItems="center" cursor="pointer">
        <Text>Finished</Text>
        <Wrap>
          <WrapItem>
            <Avatar size="sm" name="3" />
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack textAlign="center" alignItems="center" cursor="pointer">
        <Text>Overdue</Text>
        <Wrap>
          <WrapItem>
            <Avatar size="sm" name="3" />
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack textAlign="center" alignItems="center" cursor="pointer">
        <Text>Trash</Text>
        <Wrap>
          <WrapItem>
            <Avatar size="sm" name="3" />
          </WrapItem>
        </Wrap>
      </VStack>
    </VStack>
  );
};

export default Todos;
