import React from "react";
import EventLogo from "../Icons/EventLogo";
import PresentsText from "../Icons/PresentsText";
//import LogoLight from "../Icons/LogoLight";
import LogoDark from "../Icons/LogoDark";
import { Link as ReactLink } from "react-router-dom";
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

function CoverPage() {
  //const { colorMode, toggleColorMode } = useColorMode();
  // const borderColor = {
  //   light: "gray.900",
  //   dark: "gray.100",
  // };
  const [isLargerThan30] = useMediaQuery("(min-width: 30em)");

  return (
    <>
      <Flex
      id="Home"
        bg={"blackAlpha.700"}
        width={"100%"}
        h={["100%", "100vh"]}
        px={4}
        py={4}
        flexWrap={isLargerThan30 ? "nowrap" : "wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
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
          <LogoDark width={206} height={96} />
          <PresentsText />
          <EventLogo width={"70%"} />
        </Flex>
        {/* <Divider
          className="rule"
          orientation={isLargerThan30? "vertical" : "horizontal"}
          borderColor={borderColor[colorMode]}
          backgroundColor={borderColor[colorMode]}
          borderWidth={"1px"}
        /> */}
        <VStack
          alignItems={"center"}
          justifyContent={"space-evenly"}
          direction="column"
          m={"auto"}
          h={["90vh", "auto"]}
        >
          <Heading size="3xl">Code 2 Clone</Heading>
          <br />
          <Text fontSize={"lg"} align={"center"}>
            The story you are writing exists, written in absolutely perfect
            fashion, some place in the air.
            <br />
            All you must do is find it and copy it.
          </Text>
          <br />
          <Link style={{textDecoration: "none"}} as={ReactLink} to="/register">
            <Button
              variant={"solid"}
              colorScheme={"red"}
              size={"lg"}
              mr={4}
              borderRadius={"25"}
            >
              Register Now
            </Button>
          </Link>
        </VStack>
      </Flex>
    </>
  );
}

export default CoverPage;
