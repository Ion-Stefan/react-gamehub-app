import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo_black.svg";
import ColorModeSwitch from "./ColorModeSwitch";

function NavigationBar() {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <HStack
        justifyContent={"space-between"}
        paddingX={4}
        alignItems={"center"}
        marginTop={"32px"}
      >
        <Image
          cursor={"pointer"}
          onClick={refreshPage}
          src={logo}
          boxSize={"60px"}
        />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavigationBar;
