import * as React from "react";
import { VStack } from "@chakra-ui/react";

const FullScreenSection = ({ children, isDarkBackground, id, minHeight=true, ...boxProps }) => {
  return (
    <VStack
      backgroundColor={boxProps.backgroundColor}
          color={isDarkBackground ? "white" : "black"}
          id={id}
    >
          <VStack maxWidth="1280px"  minHeight={minHeight ? '100vh' : ''} {...boxProps}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;