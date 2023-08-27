/* eslint-disable no-unused-vars */
import { Box, Button, Card, CardMedia, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieCard } from "../../components/Cards";

export const HomePage = () => {
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

  return (
    <Box>
      <Box sx={{ paddingTop: { xs: "5vw", md: "1vw" } }}>
        <Box
          sx={{
            display: "flex",
            width: "100vw",
            height: "20vw",
            overflowX: "scroll",
            overflowY: "hidden",
            backgroundColor: "red",
            gap: { xs: "1.5vw", md: "1vw" },
            paddingTop: { xs: "5vw", md: "1vw" },
            // "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {movieData?.map((elem, index) => (
            <Box key={index}>
              <MovieCard
                image={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}
                title={elem.title}
              >
                <Button>Watch</Button>
              </MovieCard>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
