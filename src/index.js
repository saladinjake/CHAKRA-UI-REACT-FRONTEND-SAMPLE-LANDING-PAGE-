import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import themify from "./utils/theme";
// import Router from "next/router";
// import nProgress from "nprogress";

// Router.events.on("routeChangeStart", nProgress.start);
// Router.events.on("routeChangeError", nProgress.done);
// Router.events.on("routeChangeComplete", nProgress.done);


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={themify}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
