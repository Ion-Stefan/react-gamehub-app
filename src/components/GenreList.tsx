import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import getCroppedImageURL from "../services/image-url";

function GenreList() {
  const { genres, loading, error } = useGenres();

  if (error) return null;
  if (loading) return <Spinner marginTop={"32px"} marginLeft={"24px"} />;

  return (
    <>
      <List marginTop={"32px"}>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY={"4px"}>
            <HStack paddingX={5}>
              <Image
                borderRadius={10}
                overflow={"hidden"}
                boxShadow={"dark-lg"}
                boxSize={"32px"}
                src={getCroppedImageURL(genre.image_background)}
              ></Image>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                {genre.name}
              </Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
