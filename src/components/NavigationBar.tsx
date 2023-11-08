import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo_black.svg";
function NavigationBar() {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text>NAVBAR</Text>
      </HStack>
    </>
  );
}

export default NavigationBar;
