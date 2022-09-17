import React from "react";
import {
  VStack,
  Heading,
  Flex,
  Button,
  Collapse,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";

function FAQs() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <VStack
        alignItems={"center"}
        justifyContent={"space-evenly"}
        direction="column"
        h="100vh"
        m={0}
      >
        <Heading as="h2" size="3xl">
          FAQs
        </Heading>
        <VStack margin={"auto"}>
          <Flex direction={"column"} flexWrap={"wrap"} alignContent={"center"}>
            <Button onClick={onToggle}>Click Me</Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="40px"
                color="white"
                bg="teal.500"
                rounded="md"
                shadow="md"
                margin={4}
              >
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </Text>
              </Box>
            </Collapse>
          </Flex>
          <Flex direction={"column"} flexWrap={"wrap"} alignContent={"center"}>
            <Button onClick={onToggle}>Click Me</Button>
            <Collapse in={isOpen} animateOpacity>
              <Box
                p="40px"
                color="white"
                bg="teal.500"
                rounded="md"
                shadow="md"
                margin={4}
              >
                <Text>
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </Text>
              </Box>
            </Collapse>
          </Flex>
        </VStack>
      </VStack>
    </>
  );
}

export default FAQs;
