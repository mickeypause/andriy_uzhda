import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import avatar from '../img/avatar.png'

const greeting = "Я Андрій";
const bio1 = "Програміст початківець";
const bio2 = "на Python";


const AboutMe = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
        id={'aboutme'}
  >
    <VStack gap={'8'}>   
    <Avatar size='2xl' src={avatar}  alt=''/>
    <Heading size='lg'>{greeting}</Heading>
    <VStack>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
    </VStack>
    </VStack>


  </FullScreenSection>
);

export default AboutMe;