import {
  Avatar,
  Badge,
  Tag,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BACKLOG, COMPLETED, DELETED, PENDING } from "../../helpers/constants";
import { TodoProps } from "./todos";

type TTodoSidebarProps = {
  todos: TodoProps[];
  activeStatus: string;
  handleTodoStatusClick: (status: string) => void;
};
const TodoSidebar = ({
  todos,
  activeStatus,
  handleTodoStatusClick,
}: TTodoSidebarProps) => {
  return (
    <VStack
      spacing={3}
      borderRadius={30}
      bg="white"
      paddingY={3}
      boxShadow="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);"
      fontSize=".9em"
    >
      <VStack
        textAlign="center"
        alignItems="center"
        cursor="pointer"
        paddingY={2}
        paddingX={3}
        w="full"
        bg={activeStatus === "" ? "gray.50" : "initial"}
        borderLeft={activeStatus === "" ? 3 : "0"}
        borderLeftStyle="solid"
        borderLeftColor={activeStatus === "" ? "blue.900" : "initial"}
        onClick={() => handleTodoStatusClick("")}
      >
        <Text>All Todos</Text>
        <Wrap>
          <WrapItem>
            <Badge
              colorScheme="green"
              p={2}
              fontSize="0.8em"
              fontWeight="light"
              borderRadius="50%"
              minW={10}
              textAlign="center"
            >
              {todos?.length}
            </Badge>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack
        textAlign="center"
        alignItems="center"
        cursor="pointer"
        paddingY={2}
        paddingX={3}
        w="full"
        bg={activeStatus === BACKLOG ? "gray.50" : "initial"}
        borderLeft={activeStatus === BACKLOG ? 3 : "0"}
        borderLeftStyle="solid"
        borderLeftColor={activeStatus === BACKLOG ? "blue.900" : "initial"}
        onClick={() => handleTodoStatusClick(BACKLOG)}
      >
        <Text>Backlogs</Text>
        <Wrap>
          <WrapItem>
            <Badge
              colorScheme="gray"
              p={2}
              fontSize="0.8em"
              fontWeight="light"
              borderRadius="50%"
              minW={10}
              textAlign="center"
            >
              {todos?.filter((todo) => todo.status === BACKLOG).length}
            </Badge>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack
        textAlign="center"
        alignItems="center"
        cursor="pointer"
        paddingY={2}
        paddingX={3}
        w="full"
        bg={activeStatus === PENDING ? "gray.50" : "initial"}
        borderLeft={activeStatus === PENDING ? 3 : "0"}
        borderLeftStyle="solid"
        borderLeftColor={activeStatus === PENDING ? "blue.900" : "initial"}
        onClick={() => handleTodoStatusClick(PENDING)}
      >
        <Text>In Progress</Text>
        <Wrap>
          <WrapItem>
            <Badge
              colorScheme="yellow"
              p={2}
              fontSize="0.8em"
              fontWeight="light"
              borderRadius="50%"
              minW={10}
              textAlign="center"
            >
              {todos?.filter((todo) => todo.status === PENDING).length}
            </Badge>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack
        textAlign="center"
        alignItems="center"
        cursor="pointer"
        paddingY={2}
        paddingX={3}
        w="full"
        bg={activeStatus === COMPLETED ? "gray.50" : "initial"}
        borderLeft={activeStatus === COMPLETED ? 3 : "0"}
        borderLeftStyle="solid"
        borderLeftColor={activeStatus === COMPLETED ? "blue.900" : "initial"}
        onClick={() => handleTodoStatusClick(COMPLETED)}
      >
        <Text>Finished</Text>
        <Wrap>
          <WrapItem>
            <Badge
              colorScheme="blue"
              p={2}
              fontSize="0.8em"
              fontWeight="light"
              borderRadius="50%"
              minW={10}
              textAlign="center"
            >
              {todos?.filter((todo) => todo.status === COMPLETED).length}
            </Badge>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack
        textAlign="center"
        alignItems="center"
        cursor="pointer"
        paddingY={2}
        paddingX={3}
        w="full"
        bg={activeStatus === PENDING ? "gray.50" : "initial"}
        borderLeft={activeStatus === PENDING ? 3 : "0"}
        borderLeftStyle="solid"
        borderLeftColor={activeStatus === PENDING ? "blue.900" : "initial"}
        onClick={() => handleTodoStatusClick(PENDING)}
      >
        <Text>Overdue</Text>
        <Wrap>
          <WrapItem>
            <Badge
              colorScheme="teal"
              p={2}
              fontSize="0.8em"
              fontWeight="light"
              borderRadius="50%"
              minW={10}
              textAlign="center"
            >
              {todos?.filter((todo) => todo.status === BACKLOG).length}
            </Badge>
          </WrapItem>
        </Wrap>
      </VStack>
      <VStack
        textAlign="center"
        alignItems="center"
        cursor="pointer"
        paddingY={2}
        paddingX={3}
        w="full"
        bg={activeStatus === DELETED ? "gray.50" : "initial"}
        borderLeft={activeStatus === DELETED ? 3 : "0"}
        borderLeftStyle="solid"
        borderLeftColor={activeStatus === DELETED ? "blue.900" : "initial"}
        onClick={() => handleTodoStatusClick(DELETED)}
      >
        <Text>Trash</Text>
        <Wrap>
          <WrapItem>
            <Badge
              colorScheme="red"
              p={2}
              fontSize="0.8em"
              fontWeight="light"
              borderRadius="50%"
              minW={10}
              textAlign="center"
            >
              {todos?.filter((todo) => todo.status === DELETED).length}
            </Badge>
          </WrapItem>
        </Wrap>
      </VStack>
    </VStack>
  );
};

export default TodoSidebar;
