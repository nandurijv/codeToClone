<<<<<<< HEAD
import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
=======
import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import CoverPage from './components/CoverPage/CoverPage';

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <CoverPage/>
>>>>>>> 3b49628ce301ef633e92d1faa6b624df6d933430
    </ChakraProvider>
  );
}

export default App;
