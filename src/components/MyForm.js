import React from 'react';
import { ChakraProvider, Box, FormControl, FormErrorMessage, FormLabel, Input, Textarea, Button, VStack, Heading } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';

const MyForm = () => {
  
  return (
   <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      minHeight={false}
      id='contactme'
    >
      <VStack w="1024px" alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
         Контакти
        </Heading>
        <VStack gap='16px' marginTop={'16px'}>

        <Box rounded="md" w="100%">
        Skype: live:.cid.40d2d6c56e120592
       </Box>
        <Box  rounded="md" w="100%">
        Телефон: +380 73 947 33 75
       </Box>
       <Box  rounded="md" w="100%">
        Email: yuzhda.andrii@student.uzhnu.edu.ua
       </Box>
        </VStack>
      </VStack>
    </FullScreenSection>
  );
};

export default MyForm;
