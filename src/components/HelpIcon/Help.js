import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  // useColorMode,
  // toggleColorMode,
  // useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
function Help() {
  //const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Popover placement="top-start">
        <PopoverTrigger>
          <Button
            bg={"gray.100"}
            color={"gray.900"}
            _hover="none"
            position="fixed"
            bottom={5}
            right={5}
            zIndex={999}
          >
            <Text as="b">?</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold" >
            <Text color="black">For any queries contact our Student Coordinator{" "}</Text>
          </PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Text color="black">
            Satvik Jain : <Link href="#">9460290262</Link></Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default Help;
