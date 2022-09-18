import React from "react";
import { ReactNode } from "react";
import { Link as ReactLink } from "react-router-dom";
import {HashLink } from 'react-router-hash-link';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  Stack,
  Show,
  Hide,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
//import LogoLight from "../Icons/LogoLight";
import LogoDark from "../Icons/LogoDark";

const Links = ["Home", "Details", "Timeline", "FAQs"];
// const Navlinks = ({ children }: { children: ReactNode }) => {
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {children}
//   </Link>;
// };

function Navbar() {
  //const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        bg={"rgb(12,13,18)"}
        px={4}
        backdropFilter="auto"
        backdropBlur="8px"
        position={"fixed"}
        width="100%"
        transition={"top  0.6s"}
        zIndex={"9999"}
        boxShadow="lg"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Box>
            {/* {colorMode === "light"? <LogoLight width={100} height={48}/>: <LogoDark width={100} height={48}/>} */}
            <LogoDark width={100} height={48} />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <HashLink
                to={`/#${link}`}
                smooth
                key={link}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.700",
                }}
              >
                {link}
              </HashLink>
            ))}
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <Link style={{textDecoration: "none"}} as={ReactLink} to="/register" >
                <Button
                  variant={"solid"}
                  colorScheme={"teal"}
                  size={"sm"}
                  mr={4}                  
                >
                  Register Now
                </Button>
              </Link>
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
            </Flex>
          </HStack>
          <Show below="md">
            <Flex alignItems={"center"} justifyContent={"space-between"}>
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
                mr={2}
              />
              {/* <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button> */}
            </Flex>
          </Show>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack
              as={"nav"}
              spacing={4}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Stack>

            <Button
              variant={"solid"}
              colorScheme={"teal"}
              size={"sm"}
              m={0}
              width={"100%"}
            >
              <Link style={{textDecoration: "none"}} as={ReactLink} to="/register">
                Register Now
              </Link>
            </Button>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
