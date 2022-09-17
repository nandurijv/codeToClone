import React from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";

function Timeline() {
  return (
    <>
      <VStack
        alignItems={"center"}
        justifyContent={"space-evenly"}
        direction="column"
        m={"auto"}
        h="100vh"
      >
        <Heading as='h2' size='3xl'>Timeline</Heading>
        <Text align={"center"} fontSize="xl">
          Coming soon...
        </Text>
      </VStack>
    </>
  );
}

export default Timeline;
