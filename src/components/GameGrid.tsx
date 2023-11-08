import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>"Request failed with status of 404"</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
