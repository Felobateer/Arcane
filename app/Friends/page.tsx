"use client";
import {
  Container,
  Box,
  TextField,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import SearchFriend from "../Components/searchFriend";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";

const friendList = () => {
  return (
    <>
      <Navbar />
      <SearchFriend />
      <Footer />
    </>
  );
};

export default friendList;
