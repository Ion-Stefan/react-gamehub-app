import { Heading, Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavigationBar />
      <Box padding={16}>
        <Heading
          textAlign={"center"}
          fontSize={"5xl"}
          marginTop={8}
          marginLeft={8}
        >
          WOOOPPPPSSSS
        </Heading>
        <Text textAlign={"center"} marginLeft={8} fontSize={"4xl"}>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "An unexpected error occured."}
        </Text>
        <Text
          textAlign={"center"}
          marginLeft={8}
          marginTop={8}
          fontSize={"2xl"}
        >
          Click the logo to go back.
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
