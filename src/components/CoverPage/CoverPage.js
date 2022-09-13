import React from "react";
import EventLogo from "./EventLogo";
import {
  HStack,
  VStack,
  useColorMode,
  Divider,
  useColorModeValue,
  Flex,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";

function CoverPage() {
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = {
    light: "gray.900",
    dark: "gray.100",
  };
  return (
    <>
      <Flex w={"100%"} h={"90vh"} px={4} py={4}>
        <EventLogo />
        <Divider
          orientation="vertical"
          borderColor={borderColor[colorMode]}
          borderWidth={"1px"}
        />
        <VStack
          alignItems={"center"}
          justifyContent={"space-between"}
          direction="column"
          m={"auto"}
        >
          <Heading>Code 2 Clone</Heading>
          <p></p>
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
