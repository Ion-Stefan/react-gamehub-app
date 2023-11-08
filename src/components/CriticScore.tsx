import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  return (
    <Badge
      colorScheme={color}
      fontWeight={"bold"}
      fontSize={"md"}
      paddingX={2}
      borderRadius={5}
      marginRight={4}
    >
      {score}
    </Badge>
  );
}

export default CriticScore;
