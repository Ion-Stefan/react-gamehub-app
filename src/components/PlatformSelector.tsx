import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

function PlatformSelector() {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <>
      <Box paddingLeft={"36px"} paddingTop={"36px"}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Platforms
          </MenuButton>
          <MenuList>
            {data.map((platform) => (
              <MenuItem key={platform.id}>{platform.name}</MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default PlatformSelector;