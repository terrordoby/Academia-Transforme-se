import { Autocomplete, Button, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {exerciseOptions, fetchData} from "../utils/fetchData";

export const SearchExercises = () => {
  const [search, setSearch] = useState<string>("");
  const [exercises, setExercises] = useState<[]>([]);
  const [bodyparts, setBodyParts] = useState<[]>([]);

  useEffect( () => {
    const fetchExercisesDAta = async () => {
      fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      setBodyParts([...bodyparts]);
    };
    fetchExercisesDAta();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item: any) => item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodyPart.toLowerCase().includes(search),

      );

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      
      setSearch("");
      setExercises(searchedExercises);
    }
  };
    
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: "44px", xs: "30px" } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{ input: { fontWeight: "700", border: "none", borderRadius: "4px" }, width: { lg: "1170px", xs: "350px" }, backgroundColor: "#fff", borderRadius: "40px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: "#FF2625", color: "#fff", textTransform: "none", width: { lg: "173px", xs: "80px" }, height: "56px", position: "absolute", right: "0px", fontSize: { lg: "20px", xs: "14px" } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
  );
};

