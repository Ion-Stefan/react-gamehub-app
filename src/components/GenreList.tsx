import {
  Box,
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";
import { Genre } from "../hooks/useGenre";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ onSelectGenre, selectedGenre }: Props) {
  const { data, loading, error } = useGenres();

  if (error) return null;
  if (loading)
    return (
      <Box width={"265px"} height={"265px"}>
        <Spinner marginTop={"32px"} marginLeft={"24px"} />
      </Box>
    );

  return (
    <>
      <List marginTop={"32px"} width={"265px"}>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"4px"}>
            <HStack paddingX={5}>
              <Image
                borderRadius={10}
                overflow={"hidden"}
                boxShadow={"dark-lg"}
                boxSize={"32px"}
                src={getCroppedImageURL(genre.image_background)}
              ></Image>
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant={"link"}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
