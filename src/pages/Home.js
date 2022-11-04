import React, { useState } from "react";
import { Box } from "@mui/material";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  // const [exercises, setExercises] = useState([]);
  // const [bodyPart, setBodyPart] = useState("all");
  // const [currentPage, setCurrentPage] = useState(1);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
      // setExercises={setExercises}
      // bodyPart={bodyPart}
      // setBodyPart={setBodyPart}
      // setCurrentPage={setCurrentPage}
      />
      <Exercises
      // setExercises={setExercises}
      // bodyPart={bodyPart}
      // exercises={exercises}
      // currentPage={currentPage}
      // setCurrentPage={setCurrentPage}
      />
    </Box>
  );
};

export default Home;
