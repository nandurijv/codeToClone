import { useState } from "react";
import { Link as ReactLink } from "react-router-dom";
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
  // useColorMode,
  // useColorModeValue,
  // ColorMode,
  // toggleColorMode,
  FormControl,
  FormHelperText,
  InputRightElement,
  ButtonGroup,
  Grid,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import PresentsText from "../Icons/PresentsText";
import FormLogo from "../Icons/FormLogo";
import LogoDark from "../Icons/LogoDark";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  //const { ColorMode, toggleColorMode } = useColorMode();
  const [isLargerThan30] = useMediaQuery("(min-width: 30em)");

  return (
    <Grid
    width={"100%"}
    px={4}
    py={4}
    gridAutoFlow={isLargerThan30 ? "column" : "rows"}
    alignItems={"center"}
    justifyContent={"space-around"}
    >
      <GridItem>
        <Flex
          width={"100%"}
          h={isLargerThan30 ? "auto":"100vh"}
          direction="column"
          alignItems={"center"}
          justifyContent={"center"}
          px={"4"}
          alignContent={"center"}
        >
          <LogoDark width={206} height={96} />
          <PresentsText />
          <FormLogo />
        </Flex>
      </GridItem>
      <GridItem>
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          color="black"
        >
          <Stack
            flexDir="column"
            mb="2"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              minW={{ base: "90%", md: "468px" }}
              bg={"whiteAlpha.900"}
              color={"blackAlpha.900"}
              borderRadius={"25px"}
            >
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
                  <FormControl isRequired>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        children={<CFaUserAlt color="blackAlpha.900" />}
                      />
                      <Input
                        type="email"
                        placeholder="Email address"
                        _placeholder={{ color: "blackAlpha.700" }}
                        borderColor="blackAlpha.500"
                      />
                    </InputGroup>
                  </FormControl>
                  <FormControl>
                    <InputGroup>
                      <InputLeftElement
                        pointerEvents="none"
                        // color="gray.300"
                        children={<CFaLock color="blackAlpha.900" />}
                      />
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        _placeholder={{ color: "blackAlpha.700" }}
                        borderColor="blackAlpha.500"
                      />
                      <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                          {showPassword ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                    <FormHelperText textAlign="right">
                      <Link color={"blackAlpha.900"}>Forgot Password?</Link>
                    </FormHelperText>
                  </FormControl>
                  <ButtonGroup spacing={2}>
                    <Button
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
          <Box color={"whiteAlpha.900"}>
            New here?{" "}
            <Link color="red" as={ReactLink} to="/register">
              Sign Up
            </Link>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Login;
