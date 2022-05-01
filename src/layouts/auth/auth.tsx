import {
  Box,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ReactComponent as NotesIcon } from "../../assets/notes.svg";
import { ReactComponent as TodosIcon } from "../../assets/todos.svg";
import { ReactComponent as BookmarksIcon } from "../../assets/bookmarks.svg";
import AuthBg from "../../assets/auth-bg.png";

type Props = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  return (
    <Flex
      w="100vw"
      h={{ base: "auto", md: "100vh" }}
      direction={{ base: "column", md: "row" }}
      columnGap="2"
    >
      <Flex
        py={[0, 10, 20]}
        display={["none", "none", "flex"]}
        // bg="blue.900"
        backgroundImage={AuthBg}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        justifyContent="center"
        alignItems="center"
        overflowX="hidden"
      >
        <VStack
          alignItems="flex-start"
          spacing={10}
          w={["90", "90%"]}
          px={{ base: 10, md: 20 }}
        >
          <Stack>
            <Heading color="white" fontSize="5xl">
              Track how far you’ve gone
            </Heading>
          </Stack>

          <HStack w="full" justifyContent="center" alignItems="flex-end">
            <Box flex={1}>
              <TodosIcon width={130} />
            </Box>
            <Box flex={1}>
              <NotesIcon width={130} />
            </Box>
            <Box flex={1}>
              <BookmarksIcon width={130} />
            </Box>
          </HStack>

          <Stack>
            <Text color="white">
              Sit nisi incididunt tempor do duis fugiat proident excepteur. Ex
              elit pariatur incididunt nostrud occaecat mollit id occaecat.
              Voluptate adipisicing commodo.{" "}
            </Text>
          </Stack>
        </VStack>
      </Flex>
      {children}
    </Flex>
  );
};

export default AuthLayout;
