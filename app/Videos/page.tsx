"use client";

import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";
import { fetchVideos } from "./videos";
import SCard from "../Components/card";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
const Videos = () => {
  const [play, setPlay] = useState("");
  const [response, setResponse] = useState([]);
  useEffect(() => {
    fetchVideos(`search`).then((res) => {
      setResponse(res.data);
    });
  }, []);

  const onPlay = (name: string) => {
    setPlay(name);
  };

  console.log(response);
  return (
    <>
      <Navbar />
      <Typography variant="h2">Videos</Typography>

      {/* <Box>
        {response.map((data) => (
          <SCard Title={data}
        ))}
      </Box>

      <SCard Title={response} onStart={() => onPlay(response.part)} /> */}
      <Footer />
    </>
  );
};

export default Videos;
