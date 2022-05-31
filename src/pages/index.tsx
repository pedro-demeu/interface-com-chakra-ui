import { Divider, Flex, HStack, Image, Link, Text, useBreakpointValue, VStack } from "@chakra-ui/react";
import { Carousel } from "../components/Carousel";
import { Navbar } from "../components/Navbar";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base:false,
    lg:true
  })

  return (
    <>
      <VStack>
        <Navbar />
        <Flex backgroundImage="../images/Background.svg" w="100vw" h="100%">
          <VStack
            pl="8.75rem"
            pt="5rem"
            alignItems="flex-start"
            pb="4.375rem"
            spacing="1.25rem"
            w="100%"
          >
            <Text fontSize={38}>
              5 Continentes,
              <br />
              infinitas possibilidades.
            </Text>
            <Text fontSize={20}>
              Chegou a hora de tirar do papel a viagem que você
              <br />
              sempre sonhou.{" "}
            </Text>
          </VStack>
        </Flex>
        <Image
          src="../images/Airplane.svg"
          pr="8.75rem"
          alignSelf="flex-end"
          position="absolute"
          pt="11rem"
        />
        <HStack  spacing="8.125rem" color="gray.600" pb="5rem" pt="7.125rem" fontSize="24px" w="100vw" justifyContent="center">
          <VStack w="9.875rem">
          <Image src="../images/cocktail.svg"/>
          <Text >Vida Noturna</Text>
          </VStack>
          <VStack w="9.875rem">
          <Image src="../images/surf.svg"/>
          <Text>Praia</Text>
          </VStack>
          <VStack w="9.875rem">
          <Image src="../images/building.svg" alignSelf="center"/>
          <Text>Moderno</Text>
          </VStack>
          <VStack w="9.875rem">
          <Image src="../images/museum.svg"/>
          <Text>Clássico</Text>
          </VStack>
          <VStack w="9.875rem">
          <Image src="../images/earth.svg"/>
          <Text>E mais...</Text>
          </VStack>
        </HStack>
        <VStack color="gray.600">
        <Divider color="black" borderWidth="2px" w="5.625rem" borderColor="gray.600" alignSelf="center"/>
        <Text fontSize="36" align="center">
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
        </VStack>
        <Flex pr="10" pl="10" pb="10" maxWidth="1720px" h="100%">
        <Carousel/>
        </Flex>
      </VStack>
    </>
  );
}
