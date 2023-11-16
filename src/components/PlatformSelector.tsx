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
import { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatformId?: number;
}

function PlatformSelector({ onSelectPlatform, selectedPlatformId }: Props) {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find(
    (p) => p.id === selectedPlatformId
  );

  if (error) return null;
  return (
    <>
      <Box paddingLeft={"36px"} paddingTop={"36px"}>
        <Menu>
          <MenuButton
            fontSize={"14px"}
            textAlign={"left"}
            width={"200px"}
            maxW={"200px"}
            as={Button}
            rightIcon={<BsChevronDown />}
          >
            {selectedPlatform?.name || "Platforms"}
          </MenuButton>
          <MenuList marginLeft={0} minW="0" w={"200px"}>
            {data?.results.map((platform) => (
              <MenuItem
                padding={1}
                minW="0"
                w={"200px"}
                onClick={() => onSelectPlatform(platform)}
                key={platform.id}
                textAlign={"left"}
              >
                {platform.name}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default PlatformSelector;
