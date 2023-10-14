"use client";
import {
  Container,
  Box,
  TextField,
  Autocomplete,
  CircularProgress,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import SearchFriend from "../Components/searchFriend";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import FriendsList from "../Components/friendsList";
import Chat from "../Components/chat";

const friendList = () => {
  return (
    <>
      <Navbar />
      <SearchFriend />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <FriendsList />
        </Grid>
        <Grid item xs={8}>
          <Chat />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default friendList;
