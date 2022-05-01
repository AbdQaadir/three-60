import { Heading, VStack } from "@chakra-ui/react";
import { Outlet, Route, Routes } from "react-router-dom";

const Board = () => {
  return (
    <VStack>
      <Outlet />
    </VStack>
  );
};

export default Board;
