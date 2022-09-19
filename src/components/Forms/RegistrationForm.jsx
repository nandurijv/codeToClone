import { useEffect, useState } from "react";
import FormLogo from "../Icons/FormLogo";
import PresentsText from "../Icons/PresentsText";
import LogoDark from "../Icons/LogoDark";
import { Link as ReactLink } from "react-router-dom";
import {
  Flex,
  Input,
  Button,
  FormLabel,
  InputGroup,
  Stack,
  Select,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  ButtonGroup,
  useMediaQuery,
  Grid,
  GridItem,
  // useColorMode,
  // useColorModeValue,
  // background,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock, FaPhoneAlt } from "react-icons/fa";
// import { render } from "@testing-library/react";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaPhoneAlt = chakra(FaPhoneAlt);

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const handleShowClick = () => setShowPassword(!showPassword);
  const handleShowClick1 = () => setShowPassword1(!showPassword1);
  // function University(){
  // const [university, setUniversity] = useState([]);
  // let getuni = [];
  // useEffect(() => {
  //   const getUniversity = async () => {
  //     const res = await fetch(
  //       "http://universities.hipolabs.com/search?country=India"
  //     );
  //     getuni = await res.json();
  //     // //console.log(getuni[0].name);
  //     setUniversity(await getuni);
  //   };
  //   getUniversity();
  // }, []);
  const [category, setCategory] = useState(null);
  const [isLargerThan30] = useMediaQuery("(min-width: 30em)");

  return (
    <>
      <Grid
        width={"100%"}
        h={["100%", "100vh"]}
        px={4}
        py={4}
        gridAutoFlow={isLargerThan30 ? "column" : "rows"}
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <GridItem>
          <Flex
            width={"100%"}
            h={["100vh", "auto"]}
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
            height="auto"
            // backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
            color="black"
          >
            <Stack
              flexDir="column"
              mb="2"
              justifyContent="center"
              alignItems="center"
              width={"100px"}
            >
              <Flex
                minW={{ base: "75vw", md: "468px" }}
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
                      Registration
                    </h1>

                    <div className="clgnames">
                      <FormControl isRequired>
                        <FormLabel>University</FormLabel>
                        {/* <Select
                          placeholder="Select university "
                          borderColor="blackAlpha.500"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          {university.map((i, index) => (
                            <option key={index}>{i.name}</option>
                          ))}
                        </Select> */}
                        <Input
                          id="university"
                          placeholder="University Name"
                          _placeholder={{ color: "blackAlpha.700" }}
                          borderColor="blackAlpha.500"
                        />
                        {/* {console.log(category)} */}
                      </FormControl>
                    </div>
                    <FormControl isRequired>
                      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                        <FormLabel>First name</FormLabel>
                        <Input
                          id="firstname"
                          placeholder="First name"
                          _placeholder={{ color: "blackAlpha.700" }}
                          borderColor="blackAlpha.500"
                        />
                        <FormLabel>Last name</FormLabel>
                        <Input
                          id="lastname"
                          placeholder="Last name"
                          _placeholder={{ color: "blackAlpha.700" }}
                          borderColor="blackAlpha.500"
                        />
                      </Grid>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Contact No</FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          pattern="[6-9]{1}[0-9]{9}"
                          children={<CFaPhoneAlt color="blackAlpha.900" />}
                        />

                        <Input
                          type="mobile number"
                          placeholder="Phone number"
                          _placeholder={{ color: "blackAlpha.700" }}
                          borderColor="blackAlpha.500"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Email </FormLabel>
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
                    <FormControl isRequired>
                      <FormLabel>Password </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<CFaLock color="blackAlpha.900" />}
                        />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                          _placeholder={{ color: "blackAlpha.700" }}
                          borderColor="blackAlpha.500"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={handleShowClick}
                          >
                            {showPassword ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      {/* <FormHelperText textAlign="right">
                        <Link color={"blackAlpha.900"}>Forgot Password?</Link>
                      </FormHelperText> */}
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Confirm Password </FormLabel>
                      <InputGroup>
                        <InputLeftElement
                          pointerEvents="none"
                          children={<CFaLock color="blackAlpha.900" />}
                        />
                        <Input
                          type={showPassword1 ? "text" : "password"}
                          placeholder="Confirm Password"
                          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                          _placeholder={{ color: "blackAlpha.700" }}
                          borderColor="blackAlpha.500"
                        />
                        <InputRightElement width="4.5rem">
                          <Button
                            h="1.75rem"
                            size="sm"
                            onClick={handleShowClick1}
                          >
                            {showPassword1 ? "Hide" : "Show"}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                      {/* <FormHelperText textAlign="right">
                        <Link color={"blackAlpha.900"}>Forgot Password?</Link>
                      </FormHelperText> */}
                    </FormControl>
                    <ButtonGroup spacing={4}>
                      <Button
                        type="submit"
                        variant="solid"
                        colorScheme={"red"}
                        size="md"
                        mr={2}
                        // padding={"7px"}
                      >
                        Submit
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
              </Flex>
            </Stack>
            <Box color={"whiteAlpha.900"}>
              Already Registered?{" "}
              <Link color="red" as={ReactLink} to="/login">
                Login Here
              </Link>
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default Login;
