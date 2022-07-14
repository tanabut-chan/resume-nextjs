import React from "react";
import { useRouter } from 'next/router'
import { Link , Button, Flex, Heading, Input, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure } from "@chakra-ui/react";

export default function enpage() {
    const router = useRouter()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    return (
      <>
         <Flex w='100%' h='200px' bgGradient='linear(white,teal.300, purple.300)' height="100vh" alignItems="center" justifyContent="center">
            <Flex direction="column" background="gray.100" p={12} rounded={6}>
                <Heading mb={6} >EN PAGE</Heading>
                <Button bgGradient='linear(to-r, teal.500, green.500)'_hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)',}} onClick={onOpen}>OK</Button>
            </Flex>
        </Flex>
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