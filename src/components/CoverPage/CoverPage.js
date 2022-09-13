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
} from "@chakra-ui/react";

function CoverPage() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Flex w="100%" h="10em" alignItems={"center"} justifyContent={"space-between"} px={8} py={10}>
          <EventLogo />
          <Divider orientation="vertical"/>
          <Flex alignItems={"center"} justifyContent={"space-between"} direction="column">
            <h1>Code 2 Clone</h1>
            <p></p>
          </Flex>
        </Flex>
      </HStack>
    </>
  );
}

export default CoverPage;
