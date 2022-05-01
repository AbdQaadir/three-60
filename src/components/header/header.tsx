import { Box, Container, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Links from "../../pages/links/links";
import Notes from "../../pages/notes/notes";
import Todos from "../../pages/todos/todos";

export const boardRoutes = [
  {
    name: "todos",
    path: "todos",
    title: "Todos",
    component: Todos,
  },
  {
    name: "notes",
    path: "notes",
    title: "Notes",
    component: Notes,
  },
  {
    name: "links",
    path: "links",
    title: "Links",
    component: Links,
  },
];

type Props = {
  children?: React.ReactNode;
};
const Header = ({ children }: Props) => {
  return (
    <Stack w="full" bg="white" boxShadow="0px 0px 4px rgba(0, 0, 0, 0.1)">
      <Container maxW="container.xl">
        <HStack w="full">
          <Flex alignItems="center" columnGap={5} w="50%">
            <Logo />

            {boardRoutes?.map((route) => (
              <NavLink to={`/board/${route.path}`}>
                <Text fontWeight="light">{route.title}</Text>
              </NavLink>
            ))}
          </Flex>

          <Flex>{children}</Flex>
        </HStack>
      </Container>
    </Stack>
  );
};

export default Header;
