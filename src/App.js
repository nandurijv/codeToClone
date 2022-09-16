import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import CoverPage from './components/CoverPage/CoverPage';
import EventCarousel from './components/EventCarousel/EventCarousel';
import {EventData} from './components/EventCarousel/EventData';
import Timeline from './components/Timeline/Timeline'

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <CoverPage/>
      <EventCarousel slides={EventData}/>
      <Timeline/>
    </ChakraProvider>
  );
}

export default App;
