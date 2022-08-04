import "./App.css";
import {Box} from "@mui/material";
import {Route, Routes} from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { ExerciseDetails } from "./pages/ExercisesDetails";
import { Footer } from "./components/Footer";
import React from "react";


function App() {
  return (
    <Box width="400px" sx={{width: {xl: "1488px"}}} className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}


export default App;
