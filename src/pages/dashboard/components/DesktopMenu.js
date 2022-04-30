import React from "react";
import {Text,Link, useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Image, Link as ChakraLink } from "@chakra-ui/react";
import Drawer from './Drawer';
import {  IoMdMenu } from 'react-icons/io';

import data from './header.data';



import MobileDrawer from "./MobileMenu"
const CTA = "Get Started"
export default function Header() {
  return (
    <>
      <Flex w="100%"   border='1px' borderColor='gray.200' display="flex" align="center"
        justify="space-between">
        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
           <Text>icon</Text>
            <Text>icon</Text>
             <Text>icon</Text>
              <Text>icon</Text>
        </HStack>


        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
           <Text>icon</Text>
            <Text>icon</Text>
             <Text>icon</Text>
        </HStack>

      </Flex>



      <Flex
        w="100%"
        px="2"
        py="2"
        align="center"
        justify="space-between"
        border='1px' borderColor='gray.200'
      >
        <Text>Hello</Text>
        {/*<Image src={`${process.env.PUBLIC_URL}/logo.jpg`} h="50px" />*/}
        
        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
          {data.map((item, i) => (
            <Link key={i}>
              <Button variant="nav"> {item.label} </Button>
            </Link>
          ))}
        </HStack>

        <HStack  >
          <Button>
            {CTA}
          </Button>
          <MobileDrawer />
        </HStack>
        
      </Flex>



       <Flex w="100%"   border='1px' borderColor='gray.200' display="flex" align="center"
        justify="space-between">
        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
            <Text>icon</Text>
        </HStack>


        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
             <Text>icon</Text>
             <Text>icon</Text>
             <Text>icon</Text>
             <Text>icon</Text>
             <Text>icon</Text>
             <Text>icon</Text>
             <Text>icon</Text>
             <Text>icon</Text>
             <Text>icon</Text>
        </HStack>

      </Flex>
     
    </>
  );
}











