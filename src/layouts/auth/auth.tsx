import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { ReactComponent as NotesIcon } from "../../assets/notes.svg";
import { ReactComponent as TodosIcon } from "../../assets/todos.svg";
import { ReactComponent as BookmarksIcon } from "../../assets/bookmarks.svg";

type Props = {
  children: React.ReactNode;
};
const AuthLayout = ({ children }: Props) => {
  return (
    <Flex minWidth="max-content" h="100vh" columnGap="2">
      <Flex
        flex="1"
        bg="blue.900"
        h="full"
        justifyContent="center"
        alignItems="center"
        overflowX="hidden"
      >
        <VStack
          alignItems="flex-start"
          spacing={10}
          w={["90", "80%"]}
          px={{ base: 10, md: 20 }}
        >
          <Stack>
            <Heading color="white" fontSize="5xl">
              Track how far you’ve gone
            </Heading>
          </Stack>

          <HStack w="full" justifyContent="center">
            <Box flex={1}>
              <NotesIcon width={120} />
            </Box>
            <Box flex={1}>
              <NotesIcon width={120} />
            </Box>
            <Box flex={1}>
              <NotesIcon width={120} />
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
      <Box flex="1" h="full">
        {children}
      </Box>
    </Flex>
  );
};

export default AuthLayout;
