import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

function SearchInput({ onSearch }: Props) {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Input
          ref={ref}
          w={{ base: "150px", sm: "250px", md: "450px", lg: "650px" }}
          borderRadius={20}
          placeholder="Search for games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
}

export default SearchInput;
