import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Navbar } from "../../components/Navbar";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { CityCard } from "../../components/CityCard";

export default function AmericaDoNorte() {
  return (
    <Flex direction="column" h="100vh">
      <HStack>
        <Button as="a" href="/" color="gray.600">
          <ChevronLeftIcon w="32px" h="32px" />
        </Button>
        <Navbar />
      </HStack>
      <Flex>
        <Flex backgroundImage="../images/AmericaDoSul2.svg" w="100%" h="41.66rem">
          <Text
            alignSelf="flex-end"
            pb="3.68rem"
            pl="8.75rem"
            fontSize="3rem"
            fontWeight={600}
          >
            América do Sul
          </Text>
        </Flex>
      </Flex>
      <VStack pl="8.75rem" pt="5rem" color="gray.600">
        <HStack spacing="4.375rem">
          <Text w="37.5rem" fontSize="1.5rem" align="justify">
            A América do Sul é um subcontinente pertencente à América. A maior
            parte do seu território se encontra no hemisfério sul, além de estar
            na porção oeste do planeta. É banhada pelos oceanos Pacífico, a
            oeste, e Atlântico, a leste. Possui 12 países e um território
            ultramarino, a Guiana Francesa.
          </Text>
          <>
            <Text fontSize="24px" fontWeight="600" align="center">
              <Text color="yellow" fontSize="3rem">
                12
              </Text>
              países
            </Text>
          </>
          <>
            <Text fontSize="24px" fontWeight="600" align="center">
              <Text color="yellow" fontSize="3rem">
                456
              </Text>
              línguas
            </Text>
          </>
          <>
            <Text fontSize="24px" fontWeight="600" align="center">
              <Text color="yellow" fontSize="3rem">
                22
              </Text>
              cidades +100
            </Text>
          </>
        </HStack>
        <Text w="83rem" fontWeight="600" fontSize="2.25rem" pt="5rem">
          Cidades +100
        </Text>

        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
          {/* minChildWidth: quebra automaticamente o grid para a outra linha caso fique menor que 320px */}
          <SimpleGrid flex="1" gap="4" minChildWidth="320px">
            <CityCard
              image="../images/Rio.svg"
              country="Rio de Janeiro"
              city="Rio de Janeiro"
            />
            <CityCard
              image="../images/BuenosAires.svg"
              country="Argentina"
              city="Buenos Aires"
            />
            <CityCard image="../images/Cusco.svg" country="Perú" city="Cusco" />
            <CityCard
              image="../images/Lima.svg"
              country="Perú"
              city="Lima"
            />
            <CityCard
              image="../images/SaoPaulo.svg"
              country="São Paulo"
              city="São Paulo"
            />
          </SimpleGrid>
        </Flex>
      </VStack>
    </Flex>
  );
}
