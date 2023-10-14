"use client";
import Navbar from "./Components/Navbar";
import Blog from "./Components/blog";
import FriendsList from "./Components/friendsList";
import Post from "./Components/post";
import { Grid, Box } from "@mui/material";
import postArray from "./server and data/Posts.json";
import Footer from "./Components/footer";

export default function Home() {
  const posts = postArray;

  return (
    <>
      <Navbar />

      <main>
        <Grid container spacing={2}>
          <Grid item xs={8}>
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
          </Grid>
          <Grid item xs={4}>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                right: 1,
                height: "400px",
                maxWidth: 300,
                overflowY: "scroll",
              }}
            >
              <FriendsList />
            </Box>
          </Grid>
        </Grid>
      </main>

      <Footer />
    </>
  );
}
