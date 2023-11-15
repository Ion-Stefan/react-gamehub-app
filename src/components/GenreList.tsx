import {
  Box,
  Button,
  HStack,
  Heading,
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
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading)
    return (
      <Box width={"265px"} height={"265px"}>
        <Spinner marginTop={"32px"} marginLeft={"24px"} />
      </Box>
    );

  return (
    <>
      <Heading marginLeft={4} marginTop={8} as="h2">
        Genres
      </Heading>
      <List marginTop={"16px"} width={"265px"}>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"4px"}>
            <HStack paddingX={5}>
              <Image
                objectFit={"cover"}
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
