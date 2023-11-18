import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import GenreList from "../components/GenreList";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GameGrid from "../components/GameGrid";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
      >
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameHeading />
          <Box
            display={{ sm: "flex", md: "flex" }}
            flexDirection={{ base: "column", md: "row" }}
            alignItems={{ base: "center", sm: "flex-start", md: "flex-start" }}
          >
            <PlatformSelector />
            <SortSelector />
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
