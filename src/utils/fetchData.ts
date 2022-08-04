import { env } from "process";

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e354a3fe82mshd6b2dcd041bdac9p140da0jsnde9dfb920001" ,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  }
};

export const fetchData = async (url: string, options: any) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};