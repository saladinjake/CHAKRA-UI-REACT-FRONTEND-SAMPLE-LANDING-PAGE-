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
import { Grid, GridItem } from '@chakra-ui/react'
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


const AccordionMenuSideBar = ({toggle}) =>{

return (
<VStack w="full"  height={"450px"} overflowY={"scroll"}  overflowX={"inherit"}>

  <Accordion w="full" spacing={4}>
  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          
       Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
         
       Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Link Here
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>



  <AccordionItem>
    <h2>
      <AccordionButton>
      <Box as={ ClipboardList} ml={1} w={6} />
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
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

    </AccordionPanel>
  </AccordionItem>
</Accordion>

</VStack>
)
}

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
  <>
{/*<FlexContainer >
		<Box  border='1px' borderColor='gray.200' w={toggle ? "5%": "18%"}   h="80vh"  >            
            <Link to="#" onClick={handleSwitch}>
              <Text>
                Toggleme
              </Text>
            </Link>
            <AccordionMenuSideBar toggle={toggle}/>
		</Box>
<Box p="10px"    h="80vh"  w={toggle ? "95%": "82%"} >
         <Text>Bingo</Text>
     </Box>
</FlexContainer>*/}



<Grid
  h='80vh'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1}  >
    <Box  border='1px' borderColor='gray.200'  >            
            <Link to="#" onClick={handleSwitch}>
              <Text>
                Toggleme
              </Text>
            </Link>
            <AccordionMenuSideBar toggle={toggle}/>
    </Box>
  </GridItem>
  <GridItem colSpan={2} border='1px' borderColor='gray.200' />
  <GridItem colSpan={2} border='1px' borderColor='gray.200' />
  <GridItem colSpan={4} border='1px' borderColor='gray.200' />
</Grid>
</>




	)
}

export default SideBar