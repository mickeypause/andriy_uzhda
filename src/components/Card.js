import { Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import React from "react";

const Card = ({ title, description, imageSrc }) => {

  return (
    <VStack backgroundColor={'#fff'} borderRadius={20} padding={6} gap={'24px'}>
       <Image
    boxSize='100%'
    objectFit='cover'
    src={imageSrc}
    alt=''
      />
      <Heading color="#000">{title}</Heading>
      <Text color="#000">{description}</Text>
      <HStack style={{justifyContent: 'flex-start', alignItems: 'center', width: '100%'}}>
      </HStack>
    </VStack>
  )
};

export default Card;
