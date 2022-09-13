import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import CoverPage from './components/CoverPage/CoverPage';

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <CoverPage/>
    </ChakraProvider>
  );
}

export default App;
