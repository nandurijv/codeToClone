import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import CoverPage from './components/CoverPage/CoverPage';
import EventCarousel from './components/EventCarousel/EventCarousel';
import {EventData} from './components/EventCarousel/EventData';
import RegistrationForm from './components/Forms/RegistrationForm';
// import Login from './components/Forms/Login';
import Timeline from './components/Timeline/Timeline'

function App() {
  return (
    <ChakraProvider>
      <Navbar/>
      <RegistrationForm/>
      {/* <Login/> */}
      <CoverPage/>
      <EventCarousel slides={EventData}/>
      <Timeline/>
    </ChakraProvider>
  );
}

export default App;
