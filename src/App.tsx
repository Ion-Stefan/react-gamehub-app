import { Grid, GridItem } from "@chakra-ui/react";
import { Show } from "@chakra-ui/react";
import NavigationBar from "./components/NavigationBar";
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
          <GridItem area="aside" bg="gold">
            ASIDE
          </GridItem>
        </Show>
        <GridItem area="main" bg="dodgerblue">
          MAIN
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
