import React from "react";
import { 
  Link, 
  Box, 
  Flex, 
  Text, 
  Button, 
  Stack 
} from "@chakra-ui/react";


const WebsiteLogo = (props) =>{
  return (
    <Box {...props}>
      <img src={`${process.env.PUBLIC_PATH}/logo.jpg`} fontSize="lg" fontWeight="bold" />
        
    </Box>
  );
}

const IconClose = () => (
  <svg width="24" viewBox="0 0 18 18" 
       xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="black"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const IconHamburgger = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);


const MenuToggle = ({ toggleEvent, isMobileView }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggleEvent}>
      {isMobileView ? <IconClose /> : <IconHamburgger />}
    </Box>
  );
};

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to} >
      <Text display="block" color={"green.900"} {...rest} >
        {children}
      </Text>
    </Link>
  );
};

const NavLinks = ({ isMobileView }) => {
  return (
    <Box
      display={{ base: isMobileView ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", 
                  "space-between", 
                  "flex-end", 
                  "flex-end"
        ]}
        direction={["column", 
                    "row", 
                    "row", 
                    "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavItem to="/">Home</NavItem>
        <NavItem to="/">About</NavItem>
        <NavItem to="/">Transfer </NavItem>
        
        <NavItem to="/">
            <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            Login
          </Button>
         </NavItem>

        <NavItem to="#" isLast>
         

          <Button
            size="sm"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.600", "primary.600"]
            }}
          >
            Sign Up
          </Button>
        </NavItem>
      </Stack>
    </Box>
  );
};



const FlexContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["white", "white", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};

const NavigationBar = (props) => {
  const [isMobileView, setIsMobileView] = React.useState(false);

  const toggleEvent = () => setIsMobileView(!isMobileView);

  return (
    <FlexContainer {...props}>
      <WebsiteLogo
        w="170px"
        color={["white", "white", "primary.500", "primary.500"]}
      />
      <MenuToggle toggleEvent={toggleEvent} isMobileView={isMobileView} />
      <NavLinks isMobileView={isMobileView} />
    </FlexContainer>
  );
};




export default NavigationBar;
