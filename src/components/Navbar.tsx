import { Flex, Image } from "@chakra-ui/react";

export function Navbar(){
  return(
    <Flex width="100vw" h="100px" justifyContent="center" pb="27px" pt="27px">
      <Image src="../images/Logo.svg"  width="15.33rem" height="3.82rem" />
    </Flex>
  )
}