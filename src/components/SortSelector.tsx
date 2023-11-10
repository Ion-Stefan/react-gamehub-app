import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";

function SortSelector() {
  return (
    <>
      <Box paddingLeft={"36px"} paddingTop={"36px"}>
        <Menu>
          <MenuButton width={"200px"} as={Button} rightIcon={<BsChevronDown />}>
            Order by: Relevance
          </MenuButton>
          <MenuList marginLeft={0} minW="0" w={"200px"}>
            <MenuItem padding={1} minW="0" w={"200px"}>
              Relevance
            </MenuItem>
            <MenuItem padding={1} minW="0" w={"200px"}>
              Date added
            </MenuItem>
            <MenuItem padding={1} minW="0" w={"200px"}>
              Name
            </MenuItem>
            <MenuItem padding={1} minW="0" w={"200px"}>
              Release Date
            </MenuItem>
            <MenuItem padding={1} minW="0" w={"200px"}>
              Popularity
            </MenuItem>
            <MenuItem padding={1} minW="0" w={"200px"}>
              Average Rating
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default SortSelector;
