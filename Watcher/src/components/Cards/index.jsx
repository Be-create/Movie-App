/* eslint-disable no-unused-vars */
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { useRef, useState } from "react";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { CSSTransition } from "react-transition-group";
import "./index.css";
export const MovieCard = (Props) => {
  //   console.log(Props.image);
  const [infoDisplay, setInfoDisplay] = useState(false);
  const nodeRef = useRef(null);

  return (
    <Box
      elevation={2}
      sx={{
        display: "flex",
        borderTopLeftRadius: "10%",
        borderTopRightRadius: "10%",
        backgroundColor: "#b1b1b6",
        height: { xs: "15vw", md: "15vw" },
        width: { xs: "50vw", md: "28vw" },
        backgroundImage: `url(${Props.image})`,
        justifyContent: "center",
        alignItems: "flex-end",
        boxSizing: "border-box",
        transition: `transform 0.3s ease-out`,
        "&:hover": {
          transform: `scale(${0.9})`,
        },
      }}
      onMouseEnter={() => setInfoDisplay(true)}
      onMouseLeave={() => setInfoDisplay(false)}
    >
      <CSSTransition
        in={infoDisplay}
        nodeRef={nodeRef}
        timeout={300}
        classNames="alert"
      >
        <Box
          sx={{
            height: "50%",
            width: "100%",
          }}
          ref={nodeRef}
        >
          <InfoBox
            display={infoDisplay}
            title={Props.title}
            rating={Props.rating}
          />
        </Box>
      </CSSTransition>
    </Box>
  );
};

const InfoBox = (Props) => {
  return (
    <Box
      sx={{
        height: "100%",
        borderTopLeftRadius: "40%",
        borderTopRightRadius: "40%",

        backgroundColor: "black",

        opacity: "0.8",
        padding: "10%",
        paddingTop: "5%",
        boxSizing: "border-box",

        display: Props.display === true ? "block" : "none",
      }}
    >
      <Box sx={{ height: "100%" }}>
        <Box>
          <Typography
            sx={{
              color: "#fcfaf9",
              display: "-webkit-box",
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
            fontWeight="bold"
            // fontSize={{ md: "22px" }}
            variant="h6"
          >
            Title : {Props.title}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "red",
          }}
        >
          <Typography sx={{ color: "#fcfaf9" }} variant="h6">
            Rating :
          </Typography>
          <StarRoundedIcon
            sx={{
              // backgroundColor: "red",
              padding: "none",
              color: "#fcfaf9",
              height: "1.5vw",
              width: "1.5vw",
            }}
          />
          <Typography sx={{ color: "#fcfaf9" }} variant="h6">
            {Props.rating}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
