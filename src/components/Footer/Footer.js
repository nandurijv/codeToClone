import React from "react";
// import EventLogo from "../Icons/EventLogo";
// import PresentsText from "../Icons/PresentsText";
// import LogoDark from "../Icons/LogoDark";
//import { Link as ReactLink } from "react-router-dom";
import {
  VStack,
  //useColorMode,
  Flex,
  Button,
  Heading,
  Link,
  useMediaQuery,
  Text,
} from "@chakra-ui/react";
import FormLogo from "../Icons/FormLogo";

function Footer() {

  const [isLargerThan30] = useMediaQuery("(min-width: 30em)");

  return (
    <>
      <Flex
        bg={"gray.900"}
        width={"100%"}
        h={["100%", "100vh"]}
        px={4}
        py={4}
        flexWrap={isLargerThan30 ? "nowrap" : "wrap"}
        flexDirection
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <VStack
          alignItems={"left"}
          justifyContent={"space-evenly"}
          direction="column"
          m={"auto"}
          h={["90vh", "auto"]}
        >
          <Heading size="3xl">Reach Out to Us</Heading>
          <br />
          <Text fontSize={"3xl"} align={"left"}>
            Satvik Jain
          </Text>
          <br />
          
        </VStack>
        <Flex
          width={["100%", "50%"]}
          h={["100vh", "auto"]}
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          px={"4"}
          alignContent={"center"}
        >
          {/* {colorMode === "light"? <LogoLight width={206} height={96}/>: <LogoDark width={206} height={96}/>} */}
          <FormLogo />
        </Flex>
        {/* <Divider
          className="rule"
          orientation={isLargerThan30? "vertical" : "horizontal"}
          borderColor={borderColor[colorMode]}
          backgroundColor={borderColor[colorMode]}
          borderWidth={"1px"}
        /> */}
      </Flex>
    </>
  )
}

export default Footer