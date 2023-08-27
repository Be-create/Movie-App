/* eslint-disable no-unused-vars */
import { Box, Card, CardMedia, Typography } from "@mui/material";

export const MovieCard = (Props) => {
  //   console.log(Props.image);
  return (
    <Box
      elevation={2}
      sx={{
        borderRadius: "5%",
        backgroundColor: "#b1b1b6",
        height: { xs: "15vw", md: "15vw" },
        width: { xs: "50vw", md: "30vw" },
        backgroundImage: `url(${Props.image})`,
      }}
    >
      <Typography fontWeight="bold" fontSize={{ md: "22px" }}>
        {Props.title}
      </Typography>
    </Box>
  );
};
