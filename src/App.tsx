import { Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { boardRoutes } from "./components/header/header";
import Board from "./pages/board/board";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heading>Home</Heading>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/board" element={<Board />}>
        {boardRoutes?.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
