/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CategoryIcon from "@mui/icons-material/Category";
import SortIcon from "@mui/icons-material/Sort";
export const Navbar = () => {
  return (
    <Box
      sx={{
        width: "90vw",
        paddingTop: { xs: "5vw", md: "2vw" },
        margin: "auto",
        backgroundColor: "rgba(9, 8, 10, 1)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(57, 52, 73, 1)",
          paddingBottom: { xs: "3vw", md: "0.75vw" },
        }}
      >
        <Typography fontWeight="bold" fontSize={{ md: "22px" }}>
          Watcher{" "}
        </Typography>
        <Box sx={{ justifySelf: "flex-start" }}>
          {/* <Typography fontWeight="bold" fontSize="22px">
            Popular Categories
          </Typography> */}
          <Box sx={{ display: "flex", gap: { xs: "1.5vw", md: "1vw" } }}>
            <Typography fontWeight="bold" fontSize={{ md: "22px" }}>
              Action
            </Typography>
            <Typography fontWeight="bold" fontSize={{ md: "22px" }}>
              Romance
            </Typography>
            <Typography fontWeight="bold" fontSize={{ md: "22px" }}>
              Comedy
            </Typography>
            <Typography fontWeight="bold" fontSize={{ md: "22px" }}>
              Sci-Fi
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // margin: "auto",
            justifySelf: "right",
            display: "flex",
            gap: { xs: "1.5vw", md: "1vw" },
          }}
        >
          <SearchIcon />
          <FilterListIcon />
          {/* <CategoryIcon /> */}
          <SortIcon />
        </Box>
      </Box>
    </Box>
  );
};
