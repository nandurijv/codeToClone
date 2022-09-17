import { useState } from "react";

import {
  Flex,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  useColorMode,
  useColorModeValue,
  ColorMode,
  toggleColorMode,
  FormControl,
  FormHelperText,
  InputRightElement,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);
  const{ColorMode,toggleColorMode}=useColorMode();
  return (
    <Box >
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Box minW={{ base: "90%", md: "468px" }} bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.900", "gray.100")}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
              // backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                Login
              </h1>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="Email address" />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    // color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right" >
                  <Link>Forgot Password?</Link>
                </FormHelperText>
              </FormControl>
              <ButtonGroup spacing={4}>
              <Button
                borderRadius={1}
                type="submit"
                variant="solid"
                colorScheme={"red"}
                // width="20px"
                // height=""
                size="md"
                mr={4}
                // padding={"7px"}
              >
                Login
              </Button>
              <Button
                borderRadius={1}
                type="submit"
                variant="solid"
                colorScheme={"red"}
                // width="20px"
                // height=""
                size="md"
                // padding={"7px"}
              >
                Reset
              </Button>
              </ButtonGroup>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{" "}
        <Link color="red" href="#">
          Sign Up
        </Link>
      </Box>
    </Flex>
    </Box>
  );
};

export default Login;
