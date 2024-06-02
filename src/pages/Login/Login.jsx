import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Box,
} from "@chakra-ui/react";

const Login = ({ authenticateUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authenticateUser(username, password)) {
      navigate("/dashboard");
    } else {
      alert("Authentication failed");
    }
  };

  return (
    <VStack spacing={4} p={4}>
      <FormLabel>Username:Anil</FormLabel>
      <FormLabel>Password:Anil</FormLabel>

      <Box width="300px">
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <Button mt={4} onClick={handleLogin} colorScheme="blue">
          Login
        </Button>
      </Box>
    </VStack>
  );
};

export default Login;
