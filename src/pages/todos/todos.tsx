import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
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
import { data } from "../../dump";
import { MdMoreHoriz } from "react-icons/md";
import { BsFillPencilFill } from "react-icons/bs";
import { HiArchive } from "react-icons/hi";
import {
  AiFillFolderOpen,
  AiFillCheckSquare,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { useEffect, useState } from "react";

import TodoSidebar from "./todo-sidebar";
import { COMPLETED, PENDING, BACKLOG, DELETED } from "../../helpers/constants";

export type TodoProps = {
  id: number;
  title: string;
  status: string;
  userId: number;
  description: string;
};

const Todos = () => {
  const [todos, setTodos] = useState(data);
  const [filteredTodos, setFilteredTodos] = useState(data);
  const [activeStatus, setActiveStatus] = useState("");
  const [activeTodo, setActiveTodo] = useState<TodoProps>({} as TodoProps);

  const handleTodoStatusUpdate = ({
    id,
    status,
  }: {
    id: number;
    status: string;
  }) => {
    const updatedTodoAfterStatusUpdate = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: status };
      }
      return todo;
    });
    setTodos(updatedTodoAfterStatusUpdate);
  };

  useEffect(() => {
    if (!activeStatus) {
      setFilteredTodos(todos);
    } else {
      setFilteredTodos(todos.filter((todo) => todo.status === activeStatus));
    }
  }, [activeStatus, todos]);

  const handleTodoStatusClick = (status: string) => {
    setActiveStatus(status);
  };

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
                <TodoSidebar
                  todos={todos}
                  activeStatus={activeStatus}
                  handleTodoStatusClick={handleTodoStatusClick}
                />
              </Box>
              <Box flex={{ base: 1, md: 10 }} h="full">
                <HStack pb={4}>
                  <Heading
                    size="xl"
                    fontWeight={400}
                    textTransform="capitalize"
                  >
                    {activeStatus
                      ? activeStatus.toLowerCase() + " tasks"
                      : "All Todos"}
                  </Heading>
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
                  {filteredTodos?.map((todo: TodoProps) => (
                    <TodoItem
                      todo={todo}
                      onClick={() => setActiveTodo(todo)}
                      isActive={activeTodo?.id === todo.id}
                      handleTodoStatusUpdate={handleTodoStatusUpdate}
                    />
                  ))}
                </VStack>
              </Box>
            </Flex>
          </Container>
        </Box>

        <Box flex={2} h="full">
          <TodoDetails todo={activeTodo} />
        </Box>
      </Flex>
    </VStack>
  );
};

const TodoItem = ({
  todo,
  onClick,
  isActive,
  handleTodoStatusUpdate,
}: {
  todo: TodoProps;
  onClick: () => void;
  isActive: boolean;
  handleTodoStatusUpdate: ({
    id,
    status,
  }: {
    id: number;
    status: string;
  }) => void;
}) => {
  const { id, status, title } = todo;

  const renderMenuActionBasedOnTodoStatus = () => {
    if (status === PENDING) {
      return (
        <>
          <MenuItem
            icon={<AiFillCheckSquare color="blue" size={20} />}
            onClick={() => handleTodoStatusUpdate({ id, status: COMPLETED })}
          >
            Mark as Complete
          </MenuItem>
          <MenuItem
            icon={<AiFillFolderOpen color="blue" size={20} />}
            onClick={() => handleTodoStatusUpdate({ id, status: BACKLOG })}
          >
            Mark as Backlog
          </MenuItem>
        </>
      );
    } else if (status === COMPLETED) {
      return (
        <>
          <MenuItem
            icon={<BsFillPencilFill color="blue" size={20} />}
            onClick={() => handleTodoStatusUpdate({ id, status: PENDING })}
          >
            Mark as Pending
          </MenuItem>
          <MenuItem
            icon={<AiFillFolderOpen color="blue" size={20} />}
            onClick={() => handleTodoStatusUpdate({ id, status: BACKLOG })}
          >
            Mark as Backlog
          </MenuItem>
        </>
      );
    } else if (status === DELETED) {
      return (
        <>
          <MenuItem
            icon={<AiFillCheckSquare color="blue" size={20} />}
            onClick={() => handleTodoStatusUpdate({ id, status: PENDING })}
          >
            Restore Task
          </MenuItem>
        </>
      );
    }
  };

  const TodoStatusColorScheme: any = {
    COMPLETED: "blue",
    PENDING: "yellow",
    DELETED: "red",
    BACKLOG: "gray",
  };
  return (
    <Flex
      bg="white"
      w="full"
      p={4}
      borderRadius={1}
      alignItems="center"
      justifyContent="space-around"
      fontSize=".9em"
      cursor="pointer"
    >
      <Box width="65%" onClick={onClick}>
        <Text fontWeight={isActive ? 600 : 400}>{title}</Text>
        <Text color="gray.500">Created on 13 July, 2019 at 08:33AM</Text>
      </Box>

      <Box onClick={onClick}>
        <Badge
          borderRadius="full"
          px="2"
          colorScheme={TodoStatusColorScheme[status]}
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
                as={IconButton}
                aria-label="Options"
                icon={<MdMoreHoriz />}
                variant="outline"
              />

              <MenuList>
                {renderMenuActionBasedOnTodoStatus()}
                <MenuItem icon={<BsFillPencilFill color="green" size={20} />}>
                  Edit
                </MenuItem>
                <MenuItem
                  icon={<HiArchive color="red" size={20} />}
                  onClick={() =>
                    handleTodoStatusUpdate({ id, status: DELETED })
                  }
                >
                  Delete
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    </Flex>
  );
};

const TodoDetails = ({ todo }: { todo: TodoProps }) => {
  const { id, title, description, status } = todo;

  if (!id) return <Box w="full" h="full" overflowY="scroll" p={10}></Box>;
  return (
    <Box w="full" h="full" overflowY="scroll" p={10}>
      <Flex justifyContent="space-between">
        <Flex alignItems="center" gap={3}>
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={
              status === PENDING
                ? "yellow"
                : status === COMPLETED
                ? "blue"
                : "gray"
            }
            w={110}
            p={2}
            textAlign="center"
            fontWeight="normal"
            fontSize=".8em"
          >
            {status}
          </Badge>
        </Flex>
        <Flex
          gap={1}
          alignItems="center"
          color="gray.500"
          fontWeight={300}
          fontSize="sm"
        >
          <Icon as={AiOutlineClockCircle} />
          <Text>24/07/2022</Text>
        </Flex>
      </Flex>
      <Heading fontSize="5xl" fontWeight={300} marginY={2}>
        {title}
      </Heading>

      <Text>{description}</Text>
    </Box>
  );
};

export default Todos;
