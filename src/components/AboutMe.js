import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Я Андрій";
const bio1 = "A frontend & mobile developer";
const bio2 = "specialised in React and React Native";


const AboutMe = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
        id={'aboutme'}
  >
    <VStack gap={'8'}>   
    <Avatar size='xxl' src=' https://i.pravatar.cc/150?img=7' />
    <Heading size='lg'>{greeting}</Heading>
    <VStack>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
    </VStack>
    </VStack>


  </FullScreenSection>
);

export default AboutMe;