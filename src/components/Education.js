import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, HStack, Heading, Image } from "@chakra-ui/react";
import img from '../img/uzhnu.png'
const Education = () => {
  return (
    <FullScreenSection
      backgroundColor="#b97455"
      isDarkBackground
      p={8}
      alignItems="flex-start"
          spacing={8}
          minHeight={false}
          id='education'
    >
      <Heading as="h1" id="projects-section">
       Освіта
          </Heading>
          <HStack justifyContent={'space-between'}>
              <Heading>
                Студент 1-го курсу "Кібербезпека" в УжНУ 
              </Heading>
              <Image src={img} alt='' width={'30%'} height={'auto'}/>
          </HStack>
      
    </FullScreenSection>
  );
};

export default Education;
