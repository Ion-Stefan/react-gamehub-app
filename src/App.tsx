import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavigationBar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameHeading gameQuery={gameQuery} />
          <Box
            display={{ sm: "flex", md: "flex" }}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", sm: "flex-start", md: "flex-start" }}
          >
            <PlatformSelector
              selectedPlatformId={gameQuery.platformId}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Box>

          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
