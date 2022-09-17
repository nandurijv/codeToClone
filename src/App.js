import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import CoverPage from "./components/CoverPage/CoverPage";
import EventCarousel from "./components/EventCarousel/EventCarousel";
import { EventData } from "./components/EventCarousel/EventData";
// import RegistrationForm from './components/Forms/RegistrationForm';
// import Login from './components/Forms/Login';
import Timeline from "./components/Timeline/Timeline";
import FAQs from "./components/FAQs/FAQs";
import Help from "./components/HelpIcon/Help";
import {Box} from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Box sx={{ background: "black" }}>
        <Navbar />
        <CoverPage />
        <EventCarousel slides={EventData} />
        <Timeline />
        <FAQs />
        <Help />
        {/* <RegistrationForm/>
      <Login/>  */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
