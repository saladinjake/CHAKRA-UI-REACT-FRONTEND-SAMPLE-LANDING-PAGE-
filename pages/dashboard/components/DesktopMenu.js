import React from "react";
import {Text,Link,   Button,
  Checkbox,
   Menu,
   MenuItem,
   MenuButton,
   MenuList,
   MenuDivider,
  FormControl,
  Avatar,
  Center,
  FormLabel,
  Input,
  Heading,
   Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  Stack,

  useDisclosure, Flex, Box,   VStack, Icon, HStack, Image, Link as ChakraLink } from "@chakra-ui/react";
import Drawer from './Drawer';
import {  IoMdMenu } from 'react-icons/io';
import {CategoriesMenu } from "../mixins/mixins"
import data from './header.data';
import BaseNav from "./BaseNavigation"

import {
  Home,
  UserGroup,
  Folder,
  Calendar,
  Inbox,
  ChartSquareBar,
  LogoMark,
  LogoOnDark,
  Template,
  ClipboardList
} from './icons/heroicons';

import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import MobileDrawer from "./MobileMenu"
const CTA = "Search"

const IconWithLinksView = ({icon,href, children}) =>{
  return (<Link href={href}>
    <Flex align="left" width={140}>
      <Box as={icon} ml={1} w={6} />
      <Text fontSize="sm" fontWeight="medium" >
        {children}
      </Text>
    </Flex>
  </Link>)
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('green.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'green.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};
export default function Header() {
   const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  return (
    <>
      <Flex w="100%"   border='1px' borderColor='gray.200' display="flex" align="center"
        justify="space-between">
        <HStack as="nav" spacing="5"   >
           <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Stock Market
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Trading Tips
          </IconWithLinksView>
          <IconWithLinksView display={{ base: "none", md: "flex" }} href="/dashboard/reports" icon={ChartSquareBar}>
              Trade News
          </IconWithLinksView>
          
         
        </HStack>


        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
           <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Send Money
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Buy Coin
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar}>
              Sell Coin
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Social Networks
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Reports
          </IconWithLinksView>
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
        


        <Image display={{ base: "none", md: "block" }} src={`${process.env.PUBLIC_URL}/logo.jpg`} h="50px" />
        
         {/* <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
            {data.map((item, i) => (
              <Link key={i}>
                <Button variant="nav"> {item.label} </Button>
              </Link>
            ))}
          </HStack>*/}
<HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
          {data.map((navItem) => (
        <Box key={navItem.label} width={100}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'sm'}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    

                      <DesktopSubNav key={child.label} {...child} />
                   
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
</HStack>

        <FormControl id="email" >
        <Image display={{ base: "block", md:  "none" }} src={`${process.env.PUBLIC_URL}/logo.jpg`} h="50px" />
        
          
            <Input placeholder='Find news content,blogs,coins,assets...' variant='flushed' />
             
          </FormControl>

        <HStack  >
          <Button>
            {CTA}
          </Button>
          <MobileDrawer />
        </HStack>
        
      </Flex>



       <Flex w="100%"   border='1px' borderColor='gray.200' display="flex" align="center"
        justify="space-between">
        <HStack as="nav" padding="10px" spacing="5" overflowX={{base:"scroll", md:"inherit"}} display={{ base: "flex", md: "flex" }} >
           <CategoriesMenu/>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Reports
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar}>
              Reports
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Reports
          </IconWithLinksView>
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Reports
          </IconWithLinksView>
        </HStack>


        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }} >
          <IconWithLinksView href="/dashboard/reports" icon={ChartSquareBar} >
              Reports
          </IconWithLinksView>
           <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={''}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  
                  <Center>
                    <p>Saladin Jake</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
          
        </HStack>

      </Flex>
     
    </>
  );
}











