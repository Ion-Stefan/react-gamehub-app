import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo_black.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

function NavigationBar({ onSearch }: Props) {
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <HStack
        paddingX={4}
        alignItems={"center"}
        marginTop={"32px"}
        justifyContent={"space-between"}
      >
        <Image
          cursor={"pointer"}
          onClick={refreshPage}
          src={logo}
          boxSize={{ base: "30px", sm: "60px" }}
        />
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
}

export default NavigationBar;
