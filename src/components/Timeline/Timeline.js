import React from "react";
import EventLogo from "./../CoverPage/EventLogo";
import {
  VStack,
  useColorMode,
  Flex,
  Button,
  Heading,
  useMediaQuery,
  Text
} from "@chakra-ui/react";

function CoverPage() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const borderColor = {
  //   light: "gray.900",
  //   dark: "gray.100",
  // };
  const [isLargerThan30] = useMediaQuery("(min-width: 30em)");
  return (
    <>
      <Flex
        width={"100%"}
        h={["100%", "90vh"]}
        px={4}
        py={4}
        flexWrap={isLargerThan30? "nowrap" : "wrap"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex
          width={["100%", "50%"]}
          h={["100vh", "auto"]}
          alignItems={"center"}
          justifyContent={"center"}
          px={"4"}
          alignContent={"center"}
        >
          <EventLogo />
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
          <Heading>Code 2 Clone</Heading>
          <br/>
          <Text align={"center"}>
          The story you are writing exists, written in absolutely perfect fashion, some place in the air.
          <br/>
          All you must do is find it and copy it.
          </Text>
          <br/>
          <Button
            variant={"outline"}
            colorScheme={"green"}
            size={"lg"}
            mr={4}
            borderRadius={"25"}
          >
            Register Now
          </Button>
        </VStack>
      </Flex>
    </>
  );
}

export default CoverPage;