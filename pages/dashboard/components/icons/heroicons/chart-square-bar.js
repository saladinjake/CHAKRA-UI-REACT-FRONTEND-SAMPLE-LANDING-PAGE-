import React, { useState } from "react"
import { Box } from '@chakra-ui/react';

const ChartSquareBar = (props) => (
  <Box as="svg" fill="currentColor" viewBox="0 0 20 20" {...props}>
    <path
      fillRule="evenodd"
      d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
      clipRule="evenodd"
    />
  </Box>
);

export default ChartSquareBar;
