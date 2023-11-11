import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { BsMoonFill } from "react-icons/bs";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack marginRight={"12px"}>
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
  );
}

export default ColorModeSwitch;
