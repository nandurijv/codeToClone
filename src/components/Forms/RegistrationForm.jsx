import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";

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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock,FaPhoneAlt} from "react-icons/fa";
// import { render } from "@testing-library/react";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaPhoneAlt=chakra(FaPhoneAlt);

const Login = () => {
const [showPassword, setShowPassword] = useState(false);
const handleShowClick = () => setShowPassword(!showPassword);
// function University(){
   const [university,setUniversity]=useState([]);
   let getuni=[];
   useEffect(()=>{
    const getUniversity= async()=>{
      const res= await fetch("http://universities.hipolabs.com/search?country=India");
       getuni = await res.json();
      // //console.log(getuni[0].name);
     setUniversity(await getuni);
     }
  getUniversity();
},[]);
const [category, setCategory] = useState(null);

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      // backgroundColor="gray.200"
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
                Registration
              </h1>
              
                <div className="clgnames">
              <FormControl isRequired>
                <FormLabel>University</FormLabel>
                <Select placeholder="Select university " onChange={(e)=>setCategory(e.target.value)}>
                 {
                      university.map((i,index)=>(
                            <option key={index}>{i.name}</option>
                      ))
                 
}
                </Select>
                {/* {console.log(category)} */}
              </FormControl></div>
              <FormControl isRequired>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                  <FormLabel>First name</FormLabel>
                  <Input placeholder="First name" />
                  <FormLabel>Last name</FormLabel>
                  <Input placeholder="Last name" />
                </Grid>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Contact No</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    pattern="[6-9]{1}[0-9]{9}"
                    children={< CFaPhoneAlt color="gray.300" />}
                  />

                  <Input type="mobile number" placeholder="Phone number" />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                 
                  <Input type="email" placeholder="Email address" pattern="^[a-zA-Z0-9+_.-]+@gmail.com" />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password </FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Forgot Password?</Link>
                </FormHelperText>
              </FormControl>
              <ButtonGroup spacing={4}>
                <Button
                  borderRadius={1}
                  type="submit"
                  variant="solid"
                  colorScheme={"red"}
                  size="md"
                  mr={4}
                  // padding={"7px"}
                >
                  Submit
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
          Existing User?
        </Link>
      </Box>
    </Flex>
  );
};

export default Login;
