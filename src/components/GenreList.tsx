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
import useGenres from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";
import useGameQueryStore from "../store";

function GenreList() {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;
  if (isLoading)
    return (
      <Box width={"265px"} height={"265px"}>
        <Spinner marginTop={"32px"} marginLeft={"24px"} />
      </Box>
    );

  return (
    <>
      <Heading fontSize={24} marginLeft={4} marginTop={10} as="h2">
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
                onClick={() => setGenreId(genre.id)}
                fontSize={"lg"}
                variant={"link"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
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
