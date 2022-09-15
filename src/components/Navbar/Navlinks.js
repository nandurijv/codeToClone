// import React from 'react'
// import {ReactNode} from 'react'
// import {Box,
//   Flex,
//   HStack,
//   Link,
//   IconButton,
//   Button,
//   useDisclosure,
//   useColorModeValue,
//   Stack} from '@chakra-ui/react';
//   import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';
// import Logo from './Logo';


// const LinksList = ['Home','Details','Timeline','FAQs'];
// const Links = ({ children }: { children: ReactNode }) => {
//   <Link
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//         }}
//       href={'#'}>
//     {children}
//   </Link>
// }

// function NavLinks() {
//   const {isOpen, onOpen, onClose} = useDisclosure();
//   return (
//     <>
//       <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
//         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
//           <IconButton
//             size={'md'}
//             icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//             aria-label={'Open Menu'}
//             display={{ md: 'none' }}
//             onClick={isOpen ? onClose : onOpen}
//           />
//           <Box>
//             <Logo/>
//           </Box>
//           <HStack
//             as={'nav'}
//             spacing={4}
//             display={{ base: 'none', md: 'flex' }}>
//             {LinksList.map((link) => (
//               <Link key={link}>{link}</Link>
//             ))}
//             <Flex alignItems={'center'}>
//             <Button
//               variant={'solid'}
//               colorScheme={'teal'}
//               size={'sm'}
//               mr={4}>
//               Register Now
//             </Button>
//             </Flex>
//           </HStack>
//         </Flex>

//         {isOpen ? (
//           <Box pb={4} display={{ md: 'none' }}>
//             <Stack as={'nav'} spacing={4}>
//               {LinksList.map((link) => (
//                 <Link key={link}>{link}</Link>
//               ))}
//             </Stack>
//           </Box>
//         ) : null}
//       </Box>
//         </>
//       );
//     }

// export default NavLinks