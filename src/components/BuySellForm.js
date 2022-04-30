import React, {useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  Select,
   Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react';
import { BiLeftArrowCircle, BiRightArrowCircle }  from "react-icons/bi"

export default function BuyAndSell() {
  const [selling, setSelling] = useState(false)
  const toggleSelling = () => setSelling(!selling)
  return (
    <>


      
      <StatGroup>
  <Stat>
    <StatLabel>Sent</StatLabel>
    <StatNumber>345,670</StatNumber>
    <StatHelpText>
      <StatArrow type='increase' />
      23.36%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>

  <Stat>
    <StatLabel>Clicked</StatLabel>
    <StatNumber>45</StatNumber>
    <StatHelpText>
      <StatArrow type='decrease' />
      9.05%
    </StatHelpText>
  </Stat>
</StatGroup>


    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://fbs.com/i/platforms/fbs-trader/innovate.png'
          }
        />
      </Flex>

       
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <BiLeftArrowCircle  fontSize="80px" onClick={toggleSelling} />

        <Stack spacing={4} w={'full'} maxW={'md'} d={!selling?"block":"none"}>
          <Heading fontSize={'2xl'}>BUY/SELL TRADE  COINS 
           </Heading>

          <FormControl id="email">
            <FormLabel>I want to Buy</FormLabel>
            <Select placeholder='I want to buy?' variant='flushed'>
              <option p="10px" value='option1'>Option 1</option>
              <option p="10px" value='option2'>Option 2</option>
              <option p="10px" value='option3'>Option 3</option>
            </Select>
          </FormControl>
          <FormControl id="password">
            <FormLabel>How much in cash</FormLabel>
            <Select placeholder='I have how much fiat?' variant='flushed'>
              <option p="10px" value='option1'>Option 1</option>
              <option p="10px" value='option2'>Option 2</option>
              <option p="10px" value='option3'>Option 3</option>
            </Select>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              
              <FormLabel>Equivalent Value of exchange</FormLabel>
              <Input  variant='flushed'/>
            </Stack>
            <Button colorScheme={'green'} variant={'solid'}>
              Buy
            </Button>
          </Stack>
        
        </Stack>













        <Stack d={selling?"block":"none"} spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>BUY/SELL TRADE COINS</Heading>
          
          <FormControl id="email">
            <FormLabel>I want to Sell</FormLabel>
            <Select placeholder='I want to sell?' variant='flushed'>
              <option p="10px" value='option1'>Option 1</option>
              <option p="10px" value='option2'>Option 2</option>
              <option p="10px" value='option3'>Option 3</option>
            </Select>
          </FormControl>
          <FormControl id="password">
            <FormLabel>How much in cash</FormLabel>
            <Select placeholder='I have how much fiat?' variant='flushed'>
              <option p="10px" value='option1'>Option 1</option>
              <option p="10px" value='option2'>Option 2</option>
              <option p="10px" value='option3'>Option 3</option>
            </Select>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              
              <FormLabel>Equivalent Value of exchange</FormLabel>
              <Input  variant='flushed'/>
            </Stack>
            <Button colorScheme={'green'} variant={'solid'}>
              SELL
            </Button>
          </Stack>
        </Stack>
      </Flex>



    </Stack>


    </>
  );
}