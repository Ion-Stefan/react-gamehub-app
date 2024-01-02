import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import useGameQueryStore from "../store";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
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
