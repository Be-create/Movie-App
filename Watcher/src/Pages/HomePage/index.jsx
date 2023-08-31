/* eslint-disable no-unused-vars */
import { Box, Button, Card, CardMedia, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieCard } from "../../components/Cards";
import { Heading } from "../../components/Heading";

export const HomePage = (Props) => {
  console.log("Child Rendered");
  return (
    <Box sx={{ width: "100%", boxSizing: "border-box" }}>
      <Box
        sx={{
          paddingTop: { xs: "5vw", md: "2vw" },
          paddingRight: { xs: "5vw", md: "2vw" },
          paddingLeft: { xs: "5vw", md: "2vw" },
          paddingBottom: { xs: "5vw", md: "2vw" },
          // paddingTop: { xs: "5vw", md: "1vw" },
          boxSizing: "border-box",
          // backgroundColor: "rgba(57, 52, 73, 1)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            paddingBottom: { xs: "5vw", md: "0.75vw" },
            // backgroundColor: "red",
          }}
        >
          <Heading title="Popular Movies" />
        </Box>
        <Grid container spacing={2.5}>
          {Props.movieData?.map((elem, index) => (
            <Grid item xs={2} md={4} key={index}>
              {/* <Typography>{elem.title}</Typography> */}
              <MovieCard
                image={`https://image.tmdb.org/t/p/w500${elem.backdrop_path}`}
                title={elem.title}
                rating={elem.vote_average}
              >
                <Button>Watch</Button>
              </MovieCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
