import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import themify from "./utils/theme";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={themify}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  rootElement
);
