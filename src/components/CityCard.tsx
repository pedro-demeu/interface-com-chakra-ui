import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

interface CityCardProps{ 
  image: string;
  city: string;
  country:string;
}

export function CityCard({image, city, country}: CityCardProps){
  return(
    
    <Flex w="16rem" h="17.43rem" borderColor="yellow" borderWidth="1px" m="2.81rem" >
      <VStack>
          <Image src={image} w="16rem" h="10.81rem"/>
          <Text alignSelf="flex-start" pl="1.5rem" pt="0.75rem">{city}</Text>
          <Text alignSelf="flex-start" pl="1.5rem" pt="1rem">{country}</Text>
          </VStack>
    </Flex>
  )
}