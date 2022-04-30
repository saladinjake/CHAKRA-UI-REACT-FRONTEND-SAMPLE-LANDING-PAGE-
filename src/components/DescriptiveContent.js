import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';


const Feature = ({ heading, text }) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function BodyContent() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}   maxW="8xl" mt={14} p={4}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(2, 1fr)',
        }}
        gap={4}>
        <GridItem colSpan={1}>
          <VStack alignItems="flex-start" spacing="20px">
            <chakra.h2 fontSize="3xl" fontWeight="700">
              Learn To Trade And Earn 
            </chakra.h2>

             <chakra.p>
              Get a full suite of advanced trading tools at Bitcoin.com Exchange, 
              plus ways to generate passive income with your crypto
            </chakra.p>

            <Button colorScheme="green" size="md">
              Call To Action
            </Button>
          </VStack>
        </GridItem>
        <GridItem>
          <Flex>
            <chakra.p>
              Get up to speed on Cryptocoins, digital assets and more with profound articles, guides, and step-by-step tutorials
            </chakra.p>
          </Flex>
        </GridItem>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}>
        <Feature
          heading={'How do i get kings coin'}
          text={'To receive bitcoin, simply provide the sender with your address. You just need to make sure you are providing the right one...'}
        />
        <Feature
          heading={'How to i load Kings coin for trading'}
          text={'Creating a Kingscoin wallet is as easy as installing software on your mobile device or computer'}
        />
        <Feature
          heading={'How safe is Kings Trade'}
          text={'Kingscoin is based on the ideas laid out in a 2008 whitepaper titled Kingscoin: A Peer-to-Peer Electronic Cash System'}
        />
        <Feature
          heading={'Fourth Feature'}
          text={'Short text describing one of you features/service'}
        />
      </Grid>
    </Box>
  );
}