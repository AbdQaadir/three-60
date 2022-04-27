import { Heading } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Heading>Home</Heading>} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
