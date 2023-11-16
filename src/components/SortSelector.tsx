import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

function SortSelector() {
  const selectedSortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
  );

  return (
    <>
      <Box paddingLeft={"36px"} paddingTop={"36px"}>
        <Menu>
          <MenuButton
            fontSize={"14px"}
            width={"200px"}
            as={Button}
            rightIcon={<BsChevronDown />}
            textAlign={"left"}
          >
            Order by:{" "}
            {currentSortOrder?.label === undefined
              ? "Relevance"
              : currentSortOrder?.label}
          </MenuButton>
          <MenuList marginLeft={0} minW="0" w={"200px"}>
            {sortOrders.map((order) => (
              <MenuItem
                onClick={() => setSortOrder(order.value)}
                key={order.value}
                padding={1}
                minW="0"
                w={"200px"}
                textAlign={"left"}
              >
                {order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
}

export default SortSelector;
