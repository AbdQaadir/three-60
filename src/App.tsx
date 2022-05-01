import { Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";
import Register from "./pages/register/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heading>Home</Heading>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
