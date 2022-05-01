import React, { useState } from "react"
import { VStack, Box, Link,  Text, Flex }from "@chakra-ui/react"


import {

 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  
  useColorModeValue
} from '@chakra-ui/react';

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
} from './icons';






const FlexContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="container"
      
      
      justify="space-between"
      wrap="wrap"
      w="100%"
      
      bg={["white", "white", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};




const SidebarLink = ({ href, children, icon, toggle }) => (
  <Link href={href}>
    <Flex align="left">
      <Box as={icon} ml={1} w={6} />
      <Text fontSize="sm"  fontWeight="medium" d={toggle ? "none": "block"}>
        {children}
      </Text>
    </Flex>
  </Link>
);

function Navigations({toggle}) {
  return (
    <VStack w="full" spacing={4} height={"450px"} overflowY={"scroll"}  overflowX={"inherit"}>
      <SidebarLink href="/dashboard" icon={Home} toggle={toggle}>
        Dashboard
      </SidebarLink>
      <SidebarLink href="/dashboard/team" icon={UserGroup} toggle={toggle}>
        Team
      </SidebarLink>
      <SidebarLink href="/dashboard/projects" icon={Folder} toggle={toggle}>
        Projects
      </SidebarLink>
      <SidebarLink href="/dashboard/calendar" icon={Calendar} toggle={toggle}>
        Calendar
      </SidebarLink>
      <SidebarLink href="/dashboard/documents" icon={Inbox} toggle={toggle}>
        Documents
      </SidebarLink>
      <SidebarLink href="/dashboard/reports" icon={ChartSquareBar} toggle={toggle}>
        Reports
      </SidebarLink>

        <SidebarLink href="/dashboard" icon={Home} toggle={toggle}>
        Dashboard
      </SidebarLink>
      <SidebarLink href="/dashboard/team" icon={UserGroup} toggle={toggle}>
        Team
      </SidebarLink>
      <SidebarLink href="/dashboard/projects" icon={Folder} toggle={toggle}>
        Projects
      </SidebarLink>
      <SidebarLink href="/dashboard/calendar" icon={Calendar} toggle={toggle}>
        Calendar
      </SidebarLink>
      <SidebarLink href="/dashboard/documents" icon={Inbox} toggle={toggle}>
        Documents
      </SidebarLink>
      <SidebarLink href="/dashboard/reports" icon={ChartSquareBar} toggle={toggle}>
        Reports
      </SidebarLink>
    </VStack>
  );
}



const SideBar = ( props) => {
	const [toggle, setToggle] = useState(false)

	const handleSwitch = () => setToggle(!toggle)
	return (
<FlexContainer >
		<Box  border='1px' borderColor='gray.200' w={toggle ? "5%": "10%"}   h="80vh"  >
            
            <Link to="#" onClick={handleSwitch}>
              <Text>
                Toggleme
              </Text>
            </Link>

            <Navigations toggle={toggle}/>
		</Box>

         
<Box p="10px"    h="80vh"  w={toggle ? "95%": "90%"} >
        
         <Text>Bingo</Text>
     </Box>
</FlexContainer>
	)
}

export default SideBar