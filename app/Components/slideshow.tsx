"use client";
import React from "react";
import { useTheme } from "@emotion/react/macro";
import { Theme } from "@mui/material/styles";
import {
  Card,
  CardMedia,
  Paper,
  Typography,
  CardContent,
  makeStyles,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";

const useStyles: typeof useTheme = makeStyles((theme: Theme) => ({
  slideContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 345, // Adjust the card width as needed
  },
  cardMedia: {
    height: 0,
    paddingTop: "56.25%", // 16:9 aspect ratio (adjust as needed)
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
  },
}));

const Slideshow = () => {
  const classes = useStyles();

  return (
    <Carousel animation="slide">
      {/* {items.map((item, index) => (
        <Paper key={index} elevation={3} className={classes.slideContainer}>
          <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={item.image} title={item.title} />
            <CardContent className={classes.cardContent}>
              <Typography variant="h6">{item.title}</Typography>
            </CardContent>
          </Card>
        </Paper>
      ))} */}
    </Carousel>
  );
};

export default Slideshow;
