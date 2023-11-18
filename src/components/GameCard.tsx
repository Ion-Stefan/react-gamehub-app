import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageURL from "../services/image-url";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <>
      <Card
        _hover={{
          transform: "scale(1.03)",
          transition: "transform .15s ease-in-out",
        }}
        borderRadius={10}
        objectFit={"cover"}
        overflow={"hidden"}
        boxShadow={"dark-lg"}
      >
        <Image src={getCroppedImageURL(game.background_image)} />

        <CardBody>
          <Heading fontSize={"2xl"}>
            <Link to={"/games/" + game.slug}>{game.name}</Link>
          </Heading>

          <HStack justifyContent={"space-between"} alignItems={"center"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
          </HStack>
          <CriticScore score={game.metacritic} />
        </CardBody>
      </Card>
    </>
  );
}

export default GameCard;
