"use client";
import Navbar from "./Components/Navbar";
import Blog from "./Components/blog";
import Post from "./Components/post";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Post />
        <Blog />
      </main>
    </>
  );
}
