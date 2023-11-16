import { Box, Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavigationBar />
        </GridItem>
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
}

export default App;
