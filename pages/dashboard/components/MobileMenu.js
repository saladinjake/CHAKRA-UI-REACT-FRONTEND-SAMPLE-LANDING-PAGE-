import {Link, useDisclosure, Flex, Box, Button,  VStack, Icon, HStack, Link as ChakraLink } from "@chakra-ui/react";
import Drawer from './Drawer';
import {  IoMdMenu } from 'react-icons/io';
import React from "react";

const data = [
  {
    label: 'Inspiration',
    children: [
      {
        label: 'Link Here',
        subLabel: 'Sub Link',
        href: '#',
      },
      {
        label: 'Link Here',
        subLabel: 'Sub Link',
        href: '#',
      },
    ],
  },
  {
    label: 'Link Name',
    children: [
      {
        label: 'Link Here',
        subLabel: 'Sub Link',
        href: '#',
      },
      {
        label: 'information link',
        subLabel: 'sub introductory',
        href: '#',
      },
    ],
  },

  {
    label: 'Link Name',
    children: [
      {
        label: 'Link Here',
        subLabel: 'Sub Link',
        href: '#',
      },
      {
        label: 'information link',
        subLabel: 'sub introductory',
        href: '#',
      },
    ],
  },

  {
    label: 'Link Name',
    children: [
      {
        label: 'Link Here',
        subLabel: 'Sub Link',
        href: '#',
      },
      {
        label: 'information link',
        subLabel: 'sub introductory',
        href: '#',
      },
    ],
  },

  {
    label: 'Link Name',
    children: [
      {
        label: 'Link Here',
        subLabel: 'Sub Link',
        href: '#',
      },
      {
        label: 'information link',
        subLabel: 'sub introductory',
        href: '#',
      },
    ],
  },
  
];

export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
return (
    <Flex border='1px' borderColor='gray.200'>
  
      <Button ref={btnRef} onClick={onOpen}>
        <IoMdMenu size="26px" />
      </Button>
      
     
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <VStack alignItems="left">
          {data.map((item, i) => (
            <Link key={i}>
              <Button variant='text' > {item.label} </Button>
            </Link>
          ))}
        </VStack>
      </Drawer>
    </Flex>
  );
};
