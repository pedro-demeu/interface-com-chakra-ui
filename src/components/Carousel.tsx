// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCube } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import { Flex, Link, Text, VStack } from '@chakra-ui/react';

export function Carousel(){
  return(
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
      <Link as="a" href="../continents/europa" >
        <Flex backgroundImage="../images/Europa.svg" height="40.75rem" pb="10" align="center" justifyContent="center">
          <VStack>
          <Text fontSize="3rem">Europa</Text>
          <Text color="white" fontSize="1.5rem">
            O continente mais antigo.
          </Text>
          </VStack>
        </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link as="a" href="../continents/americaDoNorte" >
        <Flex backgroundImage="../images/AmericaDoNorte.svg" height="40.75rem" pb="10" align="center" justifyContent="center">
          <VStack>
          <Text fontSize="3rem">América do Norte</Text>
          <Text color="white" fontSize="1.5rem">
            O continente mais antigo.
          </Text>
          </VStack>
        </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link as="a" href="../continents/americaDoSul" >
        <Flex backgroundImage="../images/AmericaDoSul.svg" height="40.75rem" pb="10" align="center" justifyContent="center">
          <VStack>
          <Text fontSize="3rem">América do Sul</Text>
          <Text color="white" fontSize="1.5rem">
            O continente mais antigo.
          </Text>
          </VStack>
        </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link as="a" href="../continents/asia" >
        <Flex backgroundImage="../images/Asia.svg" height="40.75rem" pb="10" align="center" justifyContent="center">
          <VStack>
          <Text fontSize="3rem">Ásia</Text>
          <Text color="white" fontSize="1.5rem">
            O continente mais antigo.
          </Text>
          </VStack>
        </Flex>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
      <Link as="a" href="../continents/africa" >
        <Flex backgroundImage="../images/Africa.svg" height="40.75rem" pb="10" align="center" justifyContent="center">
          <VStack>
          <Text fontSize="3rem">África</Text>
          <Text color="white" fontSize="1.5rem">
            O continente mais antigo.
          </Text>
          </VStack>
        </Flex>
        </Link>
      </SwiperSlide>

      <SwiperSlide>
      <Link as="a" href="../continents/oceania" textDecoration="none" >
        <Flex backgroundImage="../images/Oceania.svg" height="40.75rem" pb="10" align="center" justifyContent="center">
          <VStack>
          <Text fontSize="3rem">Oceania</Text>
          <Text color="white" fontSize="1.5rem">
            O continente mais antigo.
          </Text>
          </VStack>
        </Flex>
        </Link>
      </SwiperSlide>
    </Swiper>
  )
}