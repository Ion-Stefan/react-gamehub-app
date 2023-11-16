import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

function GameHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <>
      <Heading marginLeft={8} marginTop={8} as="h2">
        {heading}
      </Heading>
    </>
  );
}

export default GameHeading;
