"use client";
import React from "react";
import {
  Container,
  Box,
  Avatar,
  Input,
  colors,
  FormControl,
  Typography,
} from "@mui/material";
import VideoFileIcon from "@mui/icons-material/VideoFile";
import PhotoIcon from "@mui/icons-material/Photo";
import TagFacesIcon from "@mui/icons-material/TagFaces";

const Post = () => {
  const handleFileUpload = () => {
    const selectedFile = event?.target.files[0];

    console.log("selected file: ", selectedFile);
  };
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          border: "1px gray solid",
          borderRadius: "1rem",
          marginTop: "1rem",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            width: "80%",
            p: 2,
            borderBottom: "1px lightgray solid",
          }}
        >
          <Box component="circle" sx={{ p: 2, border: "none" }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </Box>
          <Box
            component="textarea"
            placeholder={`What do you have in mind?`}
            sx={{
              p: 2,
              borderRadius: "5rem",
              background: "lightgray",
              width: "75%",
              height: "3rem",
              overflow: "hidden",
            }}
          ></Box>
        </Box>
        <FormControl sx={{ display: "inline-flex", p: 2 }}>
          <Input
            type="file"
            inputProps={{ accept: "video/*" }}
            onChange={handleFileUpload}
          >
            <VideoFileIcon />
            <Typography variant="h7">Upload video</Typography>
          </Input>
          <Input
            type="file"
            inputProps={{ accept: "image/*" }}
            onChange={handleFileUpload}
          >
            <PhotoIcon />
            <Typography variant="h7">Upload photo</Typography>
          </Input>
          <Input
            type="file"
            inputProps={{ accept: "audio/*" }}
            onChange={handleFileUpload}
          >
            <TagFacesIcon />
            <Typography variant="h7">Upload Feeling/activity</Typography>
          </Input>
        </FormControl>
      </Container>
    </>
  );
};

export default Post;
