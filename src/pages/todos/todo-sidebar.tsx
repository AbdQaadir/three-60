import { Avatar, Text, VStack, Wrap, WrapItem } from "@chakra-ui/react";

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

export default TodoSidebar;
