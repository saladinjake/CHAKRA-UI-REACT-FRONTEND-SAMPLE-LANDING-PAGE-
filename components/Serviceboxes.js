import React, { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

import { BiBulb } from "react-icons/bi"

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Dive Into Digital Trading</Heading>
          <Text>You're good to go! Buy/sell crypto, set up recurring buys for your investments, and discover what Binance has to offer.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Buy, Sell Trade, Invest</TestimonialHeading>
              <TestimonialText>
                The tools and information you need to buy, sell, trade, invest, and spend cryptocurrencies
              </TestimonialText>
            </TestimonialContent>
             <TestimonialAvatar
              
              name={'Digital Trading'}
              title={'Your Financial Freedom'}
              
            ><BiBulb fontSize="large"/></TestimonialAvatar>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Seamless Payments and Cashouts</TestimonialHeading>
              <TestimonialText>
                Use your credit card, payment app, or bank account to buy Bitcoin, Bitcoin Cash, Ethereum, and other select cryptocurrencies
              </TestimonialText>
            </TestimonialContent>

            <TestimonialAvatar
              
              name={'Get Instant Payments'}
              title={'Wire out your money'}
              
            ><BiBulb fontSize="large"/></TestimonialAvatar>
            
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Send Money/Crypto</TestimonialHeading>
              <TestimonialText>
                Send and receive cryptocurrencies anytime, anywhere - no questions asked
              </TestimonialText>
            </TestimonialContent>
            
            <TestimonialAvatar
              
              name={'Quick Transaction'}
              title={'Transfer Anywhere'}
              
            ><BiBulb fontSize="large"/></TestimonialAvatar>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}