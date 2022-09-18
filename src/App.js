import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import CoverPage from "./components/CoverPage/CoverPage";
import EventCarousel from "./components/EventCarousel/EventCarousel";
import { EventData } from "./components/EventCarousel/EventData";
import RegistrationForm from "./components/Forms/RegistrationForm";
import Login from "./components/Forms/Login";
import Timeline from "./components/Timeline/Timeline";
import FAQs from "./components/FAQs/FAQs";
import Help from "./components/HelpIcon/Help";
import { Box } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  //  Route
} from "react-router-dom";
import RegisterNow from "./components/RegisterNow/RegisterNow";
import Footer from "./components/Footer/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ChakraProvider>
          <Box sx={{color: "white" }}>
            <Navbar />
            <CoverPage />
            <EventCarousel slides={EventData} />
            <Timeline />
            <RegisterNow />
            <FAQs />
            <Help />
            <Footer/>
          </Box>
        </ChakraProvider>
      ),
    },
    {
      path: "/register",
      element: (
        <ChakraProvider>
          <Box sx={{ background: "black", color: "white" }}>
            <RegistrationForm />
          </Box>
        </ChakraProvider>
      ),
    },
    {
      path: "/login",
      element: (
        <ChakraProvider>
          <Box sx={{ background: "black", color: "white" }}>
            <Login />
          </Box>
        </ChakraProvider>
      ),
    },
  ]);

  createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
/* <RegistrationForm/>
      <Login/>  */
