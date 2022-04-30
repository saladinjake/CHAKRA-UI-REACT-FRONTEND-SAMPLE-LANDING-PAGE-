import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function GuestLayout(props) {
  return (
    <>
    <Box
      // direction="column"
      // align="center"
      // maxW={{ xl: "1200px" }}
      // m="0 auto"
      {...props}
    >
      <Header />
      {props.children}
    </Box>
      <Footer/>
    </>
  );
}
