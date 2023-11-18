import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <Box padding={8}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
