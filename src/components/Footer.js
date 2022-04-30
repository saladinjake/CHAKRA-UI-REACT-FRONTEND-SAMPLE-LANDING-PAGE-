import React,{ ReactNode } from 'react';
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';


const Logo = (props) => {
  return (
     <Box {...props}>
      <img src={`${process.env.PUBLIC_URL}/logo.jpg`} fontSize="lg" fontWeight="bold" />
        
    </Box>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('white', 'white')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Site Maps</ListHeader>
            <Link href={'#'}>Overview</Link>

            <Link href={'#'}>About</Link>
<Link href={'#'}>Advertise</Link>
<Link href={'#'}>Careers</Link>
<Link href={'#'}>Blog</Link>


            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Ico's</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Investment Schemes</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>KINGSCOIN Whitepaper</ListHeader>
            <Link href={'#'}>Get Started</Link>
            <Link href={'#'}>Authors Archive</Link>
            <Link href={'#'}>Developers</Link>
            <Link href={'#'}>Buy Bitcoin</Link>
            <Link href={'#'}>Trade Locally</Link>
            <Link href={'#'}>Contact</Link>
<Link href={'#'}>Partners</Link>
<Link href={'#'}>Support</Link>
<Link href={'#'}>Legal</Link>



          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}> Wallet</Link>
            <Link href={'#'}>KingsCoin Cash Register</Link>
          </Stack>


          <Stack align={'flex-start'}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
            <Link href={'#'}>Instagram</Link>
            <Link href={'#'}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('gray.200', 'gray.700'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Bullion Trade. All rights reserved
        </Text>
      </Box>
       <a class="float-bar" href="#" target="_blank">👋 Visit My Website</a>
          
    </Box>
  );
}