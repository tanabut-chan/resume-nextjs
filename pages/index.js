import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/router';
import { IconButton, Divider, Text, Stack, Container, Image, ButtonGroup, Spacer, GridItem, Grid, Wrap, Avatar, Link, Button, Flex, Heading, Input, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay, useDisclosure, Center } from "@chakra-ui/react";
import TextTransition, { presets } from "react-text-transition";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three';
//import img from '/assets/images/pic.jpg'

function Indexpage() {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
      if (!vantaEffect) {
        setVantaEffect(NET({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x205c87,
          backgroundColor: 0xffffff,
          spacing: 18.00,
          THREE
        }))
      }
      return () => {
          if (vantaEffect) vantaEffect.destroy()
        }
      }, [vantaEffect])
  const Headtext = [
    "Hello",
    "สวัสดี"
  ];
  const Secondtext = [
    "Language",
    "ภาษา"
  ];
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div ref={myRef} className="bg">
      <div className="profile">
      <Container w='100%' h='200px'  height="90vh" alignItems="center" justifyContent="center" >
          <Center><Heading color='blue.600' mt='50%' mb={6}><TextTransition springConfig={presets.wobbly}>{Headtext[index % Headtext.length]}</TextTransition></Heading></Center>
          <Wrap mb={6} justify='center'>
            <Image
              borderRadius='full'
              boxSize='200px'
              src='https://www.img.in.th/images/48c14f4d90bfde7235ee0ab956aa01a7.jpg'
              //src={img} 
              alt='Tanabut Chandee'
            />
          </Wrap>
          {/* <Center><Heading mb={6}><TextTransition springConfig={presets.wobbly}>{Secondtext[index % Secondtext.length]}</TextTransition></Heading></Center> */}
          <Grid>
            <GridItem>
              <Center>
                <ButtonGroup gap='2'>
                  <Button colorScheme='blackAlpha' color='blue.600' variant='outline'/*_hover={{ bgGradient: 'linear(to-r, teal.500, white)',}}*/ onClick={() => router.push('/resume_th')}>ไทย</Button>
                  <Button colorScheme='blackAlpha' color='blue.600' variant='outline'/*_hover={{ bgGradient: 'linear(to-r, red.500, yellow.500)',}}*/ onClick={() => router.push('/resume_en')}>English</Button>
                </ButtonGroup>
              </Center>
            </GridItem>
          </Grid>
      </Container>
      </div>
      <div className="footer">
        <Container borderRadius='2xl' w='100%' alignItems="center" justifyContent="center" bg='white' boxShadow='dark-lg' as="footer"  py={{ base: '5', md: '1' }}>
          <Stack spacing="7" direction={{ base: 'column', md: 'row' }} justify="space-between" py={{ base: '5', md: '6' }}>
            <Stack direction={{ base: 'column-reverse', md: 'column', lg: 'row' }} spacing={{ base: '12', md: '8' }}>
              <Stack direction="row" spacing="8">
                <Stack spacing="4" minW="36" flex="1">
                  <Text fontSize="sm" fontWeight="semibold" color="subtle">
                    My Website
                  </Text>
                  <Stack shouldWrapChildren>
                    <Link href="https://tanabut-resume.web.app">Resume-Vue.js</Link>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack
            pt="1"
            pb="1"
            justify="space-between"
            direction={{ base: 'column-reverse', md: 'row' }}
            align="center">
            <Text fontSize="sm" color="subtle">
              &copy; {new Date().getFullYear()} Tanabut Chandee.
            </Text>
            <ButtonGroup variant="ghost">
              <IconButton
                as="a"
                href="https://th.linkedin.com/in/%E0%B8%98%E0%B8%99%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B8%A3-%E0%B8%88%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%B5-b67778195"
                aria-label="LinkedIn"
                icon={<FaLinkedin fontSize="1.25rem" />}
              />
              <IconButton as="a" href="https://github.com/tanabut-chan" aria-label="GitHub" icon={<FaGithub fontSize="1.25rem" />} />
            </ButtonGroup>
          </Stack>
        </Container>
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
                This is test AlertDialogOverlay.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Back
                </Button>
                <Button colorScheme='red' ml={3} onClick={() => router.push('/about')}>
                  Next Page!
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
    </div>
    
  )

}
export default Indexpage