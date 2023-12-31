import {
  Card,
  CardBody,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
} from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} boxShadow={"dark-lg"}>
        <Skeleton height={"300px"} width={"300px"}>
          <CardBody>
            <SkeletonCircle />
            <SkeletonText />
          </CardBody>
        </Skeleton>
      </Card>
    </>
  );
}

export default GameCardSkeleton;
