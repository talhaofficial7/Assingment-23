import React from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading display={{display: ""}}>Welcome to Social Media App</Heading>
        <Button colorScheme="teal" onClick={() => navigate('/login')}>
          Login
        </Button>
        <Button colorScheme="blue" onClick={() => navigate('/register')}>
          Register
        </Button>
      </VStack>
    </Box>
  );
}

export default HomePage;
