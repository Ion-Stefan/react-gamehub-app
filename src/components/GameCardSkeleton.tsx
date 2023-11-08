import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"} boxShadow={"dark-lg"}>
        <Skeleton height={"350px"}>
          <CardBody>
            <SkeletonText />
          </CardBody>
        </Skeleton>
      </Card>
    </>
  );
}

export default GameCardSkeleton;
