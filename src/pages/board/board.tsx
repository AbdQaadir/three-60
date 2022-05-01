import { VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Board = () => {
  return (
    <VStack>
      <Outlet />
    </VStack>
  );
};

export default Board;
