import React from "react";
import ResponsiveAppBar from "../components/Navbar/Navbar";
import Headers from "../components/Headers";
import Popular from "../components/Popular";
import { Box } from "@mui/material";
import Works from "../components/Works";
import Members from "../components/Members";
import WorkStation from "../components/WorkStation";
import Clients from "../components/Clients";
import Footers from "../components/Footers";

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box>
        <Headers />
        <Popular />
        <Works />
        <Members />
        <WorkStation />
        <Clients />
        <Footers />
      </Box>
    </>
  );
};

export default Home;
