"use client";

import React from "react";
import { Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import GameCard from "../Components/card";
const Games = () => {
  return (
    <>
      <Navbar />
      <GameCard />
      <Footer />
    </>
  );
};

export default Games;
