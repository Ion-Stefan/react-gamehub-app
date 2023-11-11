import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

function SearchInput() {
  return (
    <InputGroup
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <InputLeftElement children={<BsSearch />} />
      <Input
        maxW={"650px"}
        borderRadius={20}
        placeholder="Search games..."
        variant={"filled"}
      />
    </InputGroup>
  );
}

export default SearchInput;
