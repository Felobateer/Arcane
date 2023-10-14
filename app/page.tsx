"use client";
import Navbar from "./Components/Navbar";
import Blog from "./Components/blog";
import Friends from "./Components/friendsList";
import Post from "./Components/post";
import { Box } from "@mui/material";
import postArray from "./server and data/Posts.json";

export default function Home() {
  const posts = postArray;

  return (
    <>
      <Navbar />

      <main>
        <Box></Box>
        <Post />
        {posts.map((post) => (
          <Blog
            key={post.id}
            title={post.first_name + post.last_name}
            date={post.Posted}
            content={post.post}
            pic={post.photo}
            profileImage={post.profileImage}
          />
        ))}
      </main>
      <section>
        <Friends />
      </section>
    </>
  );
}
