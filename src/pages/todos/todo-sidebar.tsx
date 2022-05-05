import { Badge, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
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
  const [todoStats, setTodoStats] = useState<any>([]);

  useEffect(() => {
    let stats = [
      { label: "All Todos", status: "", color: "green", count: todos.length },
      {
        label: "In Progress",
        status: PENDING,
        color: "yellow",
        count: todos.filter((todo) => todo.status === PENDING).length,
      },
      {
        label: "Finished",
        status: COMPLETED,
        color: "blue",
        count: todos.filter((todo) => todo.status === COMPLETED).length,
      },
      {
        label: "Backlog",
        status: BACKLOG,
        color: "gray",
        count: todos.filter((todo) => todo.status === BACKLOG).length,
      },
      {
        label: "Trash",
        status: DELETED,
        color: "red",
        count: todos.filter((todo) => todo.status === DELETED).length,
      },
    ];

    setTodoStats(stats);
  }, [todos]);

  return (
    <VStack
      spacing={3}
      borderRadius={30}
      overflow="hidden"
      bg="white"
      paddingY={3}
      boxShadow="box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);"
      fontSize=".9em"
      minHeight={300}
    >
      {todoStats.map((todoStat: any) => (
        <VStack
          textAlign="center"
          alignItems="center"
          cursor="pointer"
          paddingY={2}
          paddingX={3}
          w="full"
          bg={activeStatus === todoStat.status ? "gray.50" : "initial"}
          borderLeft={activeStatus === todoStat.status ? 3 : "0"}
          borderLeftStyle="solid"
          borderLeftColor={
            activeStatus === todoStat.status ? "blue.900" : "initial"
          }
          onClick={() => handleTodoStatusClick("")}
        >
          <Text>{todoStat.label}</Text>
          <Wrap>
            <WrapItem>
              <Badge
                colorScheme={todoStat.color}
                p={2}
                fontSize="0.8em"
                fontWeight="light"
                borderRadius="full"
                minW={10}
                textAlign="center"
              >
                {todoStat?.count}
              </Badge>
            </WrapItem>
          </Wrap>
        </VStack>
      ))}
    </VStack>
  );
};

export default TodoSidebar;
