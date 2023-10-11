"use client";
import Navbar from "./Components/Navbar";
import Blog from "./Components/blog";
import Friends from "./Components/friendsList";
import Post from "./Components/post";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Box></Box>
        <Post />
        <Blog />
      </main>
      <section>
        <Friends />
      </section>
    </>
  );
}
