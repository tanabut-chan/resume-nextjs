import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router'
import { MenuItem, MenuDivider, Center, MenuList, Avatar, MenuButton, Menu, colorMode, toggleColorMode, Stack, useColorModeValue, Box, Link, Button, Flex, Heading, Input, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, color, Container } from "@chakra-ui/react";
import { StarIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import FOG from 'vanta/dist/vanta.fog.min'
import * as THREE from 'three';

export default function thpage() {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(FOG({
          el: myRef.current,
          THREE
        }))
      }
      return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])
  return (
    <>
    <div ref={myRef}>
    Foreground content goes here
  </div>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex mb={6} h={12} alignItems={'center'} justifyContent={'space-between'}>
          <Box fontSize='lg' bgGradient='linear(to-l, #7928CA, #FF0080)' bgClip='text' fontWeight='extrabold'>ธนบัตร จันดี</Box>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box bgGradient='linear(to-l, #7928CA, #FF0080)' fontSize='sm' borderRadius='md' color='black' p={4} mb={6} mr={4} ml={4} align="center">
        สวัสดีครับ ผมเป็น Web-Mobile AppDeveloper
      </Box>
      {/* <Flex  w='100%' h='200px' bgGradient='linear(white,teal.300, purple.300)' height="100vh" alignItems="center" justifyContent="center">
        
        </Flex> */}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Hi Visitor !
            </AlertDialogHeader>

            <AlertDialogBody>
              You want to go back?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={() => router.back()}>
                Yes!
              </Button>
              {/* <Button colorScheme='red' ml={3} onClick={() => router.push('/about')}>
                  Go to
                </Button> */}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )

}