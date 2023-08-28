/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Box, Popover, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CategoryIcon from "@mui/icons-material/Category";
import SortIcon from "@mui/icons-material/Sort";
import { Heading } from "../Heading";
import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";

export const Navbar = (Props) => {
  const [filterAnchorEl, setFilterAnchorEl] = React.useState(null);
  const [sortAnchorEl, setSortAnchorEl] = React.useState(null);
  const handleSortClick = (event) => {
    setSortAnchorEl(event.currentTarget);
  };
  const handleSortClose = () => {
    setSortAnchorEl(null);
  };

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const filterOpen = Boolean(filterAnchorEl);
  const sortOpen = Boolean(sortAnchorEl);

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
        {/* <Typography fontWeight="bold" fontSize={{ md: "22px" }}>
          Watcher{" "}
        </Typography> */}
        <Heading title="Watcher" />
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
          <FilterListIcon onClick={(event) => handleFilterClick(event)} />
          {/* <CategoryIcon /> */}
          <SortIcon onClick={(event) => handleSortClick(event)} />
        </Box>
      </Box>

      <Popover
        open={filterOpen}
        anchorEl={filterAnchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography
          sx={{ p: 1, cursor: "pointer" }}
          onClick={() => Props.handleFilter("ratingLow")}
        >
          Rating:low
        </Typography>
        <Typography
          sx={{ p: 1, cursor: "pointer" }}
          onClick={() => Props.handleFilter("ratingHigh")}
        >
          Rating:High
        </Typography>
      </Popover>
      <Popover
        open={sortOpen}
        anchorEl={sortAnchorEl}
        onClose={handleSortClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Typography
          sx={{ p: 1, cursor: "pointer" }}
          onClick={() => Props.handleSort("title")}
        >
          Title
        </Typography>
        <Typography
          sx={{ p: 1, cursor: "pointer" }}
          onClick={() => Props.handleSort("popularity")}
        >
          Popularity
        </Typography>
      </Popover>
    </Box>
  );
};
