import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import { SearchExercises } from "../components/SearchExercises";

export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
    </Box>
  );
};

