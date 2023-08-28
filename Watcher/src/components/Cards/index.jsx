/* eslint-disable no-unused-vars */
import { Box, Card, CardMedia, Typography } from "@mui/material";

export const MovieCard = (Props) => {
  //   console.log(Props.image);
  return (
    <Box
      elevation={2}
      sx={{
        display: "flex",
        borderRadius: "10%",
        backgroundColor: "#b1b1b6",
        height: { xs: "15vw", md: "15vw" },
        width: { xs: "50vw", md: "28vw" },
        backgroundImage: `url(${Props.image})`,
        justifyContent: "flex-end",
        alignItems: "end",
      }}
    >
      <Typography
        sx={{ color: "#fcfaf9" }}
        fontWeight="bold"
        // fontSize={{ md: "22px" }}
        variant="h4"
      >
        {Props.title}
      </Typography>
    </Box>
  );
};
