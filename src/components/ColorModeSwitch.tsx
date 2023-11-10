import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack marginRight={"24px"}>
      <Text fontWeight={"bold"} fontSize={"16px"}>
        Normal
      </Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text fontWeight={"bold"} fontSize={"16px"}>
        Dark
      </Text>
    </HStack>
  );
}

export default ColorModeSwitch;
