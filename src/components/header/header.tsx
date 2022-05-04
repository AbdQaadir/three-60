import { Container, Flex, HStack, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/logo.svg";
import Links from "../../pages/links/links";
import Notes from "../../pages/notes/notes";
import Todos from "../../pages/todos/todos";

const baseRoute = "/board/";
export const boardRoutes = [
  {
    name: "todos",
    path: `${baseRoute}todos`,
    title: "Todos",
    component: Todos,
  },
  {
    name: "notes",
    path: `${baseRoute}notes`,
    title: "Notes",
    component: Notes,
  },
  {
    name: "links",
    path: `${baseRoute}links`,
    title: "Links",
    component: Links,
  },
];

type Props = {
  children?: React.ReactNode;
};
const Header = ({ children }: Props) => {
  const location = useLocation();

  return (
    <Stack w="full" bg="white" boxShadow="0px 0px 4px rgba(0, 0, 0, 0.1)">
      <Container maxW="container.xl">
        <HStack w="full">
          <Flex alignItems="center" columnGap={5} w="50%">
            <Logo />

            {boardRoutes?.map((route) => {
              const isActive = location.pathname === route.path;
              return (
                <Link
                  borderBottom={isActive ? "solid" : "none"}
                  borderBottomColor={isActive ? "blue.900" : ""}
                  borderBottomWidth={isActive ? 3 : 0}
                  as={RouterLink}
                  to={`${route.path}`}
                  py={5}
                  px={3}
                >
                  <Text fontWeight="light">{route.title}</Text>
                </Link>
              );
            })}
          </Flex>

          <Flex>{children}</Flex>
        </HStack>
      </Container>
    </Stack>
  );
};

export default Header;
