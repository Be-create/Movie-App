/* eslint-disable no-unused-vars */
import { Box } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./Pages/HomePage";
import { Heading } from "./components/Heading";
import { useEffect, useState } from "react";

function App() {
  const [movieData, setMovieData] = useState();
  const fetchdata = async () => {
    try {
      const url = "https://api.themoviedb.org/3/movie/popular?page=1";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjcxYjVjNzNmMjlhODA3MTcxMmZmNDlkZTc3OTA4NCIsInN1YiI6IjYyZTM1NGE4ZGY4NTdjMDA2NDAwYWMwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1CZpImQVwRYZeFTO7Y-ynaSyNX-bz2nhd0rhVFkl5Oo",
        },
      };

      const res = await fetch(url, options);
      const data = await res.json();
      setMovieData(data.results);
      console.log(movieData);
    } catch (error) {
      console.log("error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const handleSort = (props) => {
    const temp = movieData;
    switch (props) {
      case "title":
        console.log(temp);
        setMovieData(
          temp.slice().sort((a, b) => a.title.localeCompare(b.title))
        );
        break;
      case "popularity":
        console.log(temp);
        setMovieData(temp.slice().sort((a, b) => a.popularity - b.popularity));
        break;
      default:
        break;
    }
  };
  const handleFilter = (props) => {
    const temp = movieData;
    switch (props) {
      case "ratingHigh":
        setMovieData(temp.filter((elem) => Number(elem.vote_average) > 7));
        console.log(movieData);
        break;
      case "ratingLow":
        setMovieData(temp.filter((elem) => Number(elem.vote_average) < 7));
        console.log(movieData);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Box
        sx={{
          // display: "flex",
          // flexDirection: "column",
          width: "100vw",
          // backgroundColor: "rgba(9, 8, 10, 1)",
          height: "100vh",
          paddingLeft: { xs: "10vw", md: "5vw" },
          paddingRight: { xs: "10vw", md: "5vw" },
          boxSizing: "border-box",
          overflowX: "hidden",
        }}
      >
        <Navbar handleSort={handleSort} handleFilter={handleFilter} />
        <HomePage movieData={movieData} />
      </Box>
    </>
  );
}

export default App;
