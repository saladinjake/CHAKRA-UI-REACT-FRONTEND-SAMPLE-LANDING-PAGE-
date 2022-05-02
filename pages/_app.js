import React from "react"
import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import themify from "../utils/theme";
// import Router from "next/router";
// import nProgress from "nprogress";

// Router.events.on("routeChangeStart", nProgress.start);
// Router.events.on("routeChangeError", nProgress.done);
// Router.events.on("routeChangeComplete", nProgress.done);

const RedirectToSignIn = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/sign-in");
  });
  return null;
};

const MyApp = ({ Component, pageProps }) => {
  
  return (

    <React.StrictMode>
        <ChakraProvider theme={themify}>
          <Component {...pageProps} />
        </ChakraProvider>
  </React.StrictMode>
      
          
       
          
   
  );
};

export default MyApp;
