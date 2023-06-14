import React from "react";

import { Box, HStack } from "@chakra-ui/react";



const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
          zIndex={100}
          id={'home'}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="flex-end"
          alignItems="center"
              >
                 
          <nav>
            <HStack spacing={8}>
            <div className='nav-item' onClick={handleClick('aboutme')}>Про мене</div>
              <div className='nav-item' onClick={handleClick('projects')}>Навички</div>
              <div className='nav-item' onClick={handleClick('education')}>Освіта</div>
              <div className='nav-item' onClick={handleClick('contactme')}>Контакти</div>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
