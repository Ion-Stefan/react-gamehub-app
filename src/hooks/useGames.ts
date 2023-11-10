import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  name: string;
  slug: string;
  id: number;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  // description: string;
  // price: number;
  // release_date: string;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platfroms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
