import useData from "./useData";
import { Genre } from "./useGenre";

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

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) =>
  useData<Game>(
    "/games",
    {
      params: { genres: selectedGenre?.id, platfroms: selectedPlatform?.id },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
