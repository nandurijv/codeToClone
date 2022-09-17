import React from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    useColorMode,
    toggleColorMode,
    useColorModeValue,
    Text,
    Link
  } from '@chakra-ui/react'
function Help() {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div style={{height: '100vh'}}>
      <Popover placement='top-start'>
  <PopoverTrigger>
    <Button bg={useColorModeValue("gray.900", "gray.100")} color={useColorModeValue("gray.100", "gray.900")} _hover='none' position='fixed' bottom={5} right={5}>
        <Text as='b'>?</Text>
        </Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverHeader fontWeight='semibold'>For any queries contact our Student Coordinator </PopoverHeader>
    <PopoverArrow />
    <PopoverCloseButton />
    <PopoverBody>
    Satvik Jain : <Link href='#'>9460290262</Link>
    </PopoverBody>
  </PopoverContent>
</Popover>
    </div>
  )
}

export default Help