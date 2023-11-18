import { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}

function ExpandableText({ children }: Props) {
  const [expandedText, setExpandedText] = useState(false);
  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expandedText
    ? children
    : children.substring(0, limit) + "...";

  if (!children) return null;

  return (
    <Text>
      {summary}
      <Button
        marginLeft={2}
        colorScheme="yellow"
        fontWeight={"bold"}
        size={"xs"}
        onClick={() => setExpandedText(!expandedText)}
      >
        {expandedText ? "Show less" : "Show more"}{" "}
      </Button>
    </Text>
  );
}

export default ExpandableText;
