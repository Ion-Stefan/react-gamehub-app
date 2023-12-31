import logo from "../assets/logo_black.svg";
import SearchInput from "./SearchInput";
import { HStack, Switch, Text, useColorMode, Image } from "@chakra-ui/react";
import { BsMoonFill } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";

function NavigationBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomepage = location.pathname === "/";
  function refreshPage() {
    if (isHomepage) {
      window.location.reload();
    } else {
      navigate("/");
    }
  }
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack
        paddingX={{ base: 4, md: 12 }}
        alignItems={"center"}
        marginTop={"32px"}
        justifyContent={"space-between"}
      >
        <Image
          filter={colorMode === "dark" ? "invert(1)" : "invert(0)"}
          cursor={"pointer"}
          onClick={refreshPage}
          src={logo}
          boxSize={{ base: "30px", sm: "60px" }}
        />
        <SearchInput />

        <HStack marginRight={{ base: "12px", md: "36px" }}>
          <Switch
            id="switch"
            colorScheme="green"
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}
          />
          <Text fontWeight={"bold"} fontSize={"16px"}>
            {<BsMoonFill />}
          </Text>
        </HStack>
      </HStack>
    </>
  );
}

export default NavigationBar;
