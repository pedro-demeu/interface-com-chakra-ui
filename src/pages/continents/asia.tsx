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
        <Flex backgroundImage="../images/asia2.svg" w="100%" h="41.66rem">
          <Text
            alignSelf="flex-end"
            pb="3.68rem"
            pl="8.75rem"
            fontSize="3rem"
            fontWeight={600}
          >
            Ásia
          </Text>
        </Flex>
      </Flex>
      <VStack pl="8.75rem" pt="5rem" color="gray.600">
        <HStack spacing="4.375rem">
          <Text w="37.5rem" fontSize="1.5rem" align="justify">
            A Ásia é o maior continente em área terrestre do mundo, estando boa
            parte do continente localizado no Hemisfério Norte. Além de ser o
            mais extenso, é também o mais populoso, habitando nele cerca de três
            quintos da população mundial. A Ásia é multicultural, abrigando
            diversas culturas, etnias, religiões e tradições.
          </Text>
          <>
            <Text fontSize="24px" fontWeight="600" align="center">
              <Text color="yellow" fontSize="3rem">
                50
              </Text>
              países
            </Text>
          </>
          <>
            <Text fontSize="24px" fontWeight="600" align="center">
              <Text color="yellow" fontSize="3rem">
                60
              </Text>
              línguas
            </Text>
          </>
          <>
            <Text fontSize="24px" fontWeight="600" align="center">
              <Text color="yellow" fontSize="3rem">
                27
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
              image="../images/Londres.svg"
              country="Reino Unido"
              city="Londres"
            />
            <CityCard
              image="../images/Paris.svg"
              country="França"
              city="Paris"
            />
            <CityCard image="../images/Roma.svg" country="Itália" city="Roma" />
            <CityCard
              image="../images/Praga.svg"
              country="República Tcheca"
              city="Praga"
            />
            <CityCard
              image="../images/Amsterdã.svg"
              country="Holanda"
              city="Amsterdã"
            />
          </SimpleGrid>
        </Flex>
      </VStack>
    </Flex>
  );
}
