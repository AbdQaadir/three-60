import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import Header from "../../components/header/header";

const Todos = () => {
  return (
    <VStack w="full" h="100vh">
      <Header>Todos</Header>

      <Flex w="full" h="100%">
        <Box flex={4} h="full" bg="gray.100">
          <Container maxW="container.md" paddingY={10}>
            1
          </Container>
        </Box>

        <Box flex={2} h="full">
          2
        </Box>
      </Flex>
    </VStack>
  );
};

export default Todos;
