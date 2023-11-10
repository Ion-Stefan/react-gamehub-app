import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} boxShadow={"dark-lg"}>
        <Image src={getCroppedImageURL(game.background_image)} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />

            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
