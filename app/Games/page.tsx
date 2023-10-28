"use client";

import React, { useState } from "react";
import { Typography, Paper, Container, Grid } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/footer";
import GameCard from "../Components/card";
import GamePlatform from "../Components/gamePlatform";
const Games = () => {
  const [gameOn, setGameOn] = useState<boolean>(false);
  const [games, setGames] = useState<string[]>([
    "snake",
    "pong",
    "chess",
    "Memory",
    "Tic Tac Toe",
  ]);
  const [gameName, setGameName] = useState<string>("");

  const OpenGame = (gameName: string) => {
    switch (gameName) {
      case "snake":
        fetch("http://localhost:3000/Games/snake")
          .then((res) => res.blob())
          .then((gameData) => {
            setGameOn(true);
            setGameName("snake");
            console.log(gameData);
          })
          .catch((error) => {
            console.error("Error fetching the game:", error);
          });
        break;
      case "pong":
        fetch("http://localhost:3000/Games/pong")
          .then((res) => res.blob())
          .then((gameData) => {
            setGameOn(true);
            setGameName("pong");
            console.log(gameData);
          })
          .catch((error) => {
            console.error("Error fetching the game:", error);
          });
        break;
      case "chess":
        fetch("http://localhost:3000/Games/chess")
          .then((res) => res.blob())
          .then((gameData) => {
            setGameOn(true);
            setGameName("chess");
            console.log(gameData);
          })
          .catch((error) => {
            console.error("Error fetching the game:", error);
          });
        break;
      case "memory":
        fetch("http://localhost:3000/Games/memory")
          .then((res) => res.blob())
          .then((gameData) => {
            setGameOn(true);
            setGameName("memory");
            console.log(gameData);
          })
          .catch((error) => {
            console.error("Error fetching the game:", error);
          });
        break;
      case "Tic Tac Toe":
        fetch("http://localhost:3000/Games/TicTacToe")
          .then((res) => res.blob())
          .then((gameData) => {
            setGameOn(true);
            setGameName("Tic Tac Toe");
            console.log(gameData);
          })
          .catch((error) => {
            console.error("Error fetching the game:", error);
          });
        break;
      default:
    }
  };
  return (
    <>
      <Navbar />
      <Typography variant="h2" sx={{ margin: "1rem" }}>
        Games
      </Typography>
      {gameOn ? <GamePlatform game={game} gameName={gameName} /> : null}
      <Container
        sx={{
          width: "95%",
          display: "flex",
          flexWrap: "wrap",
          margin: "2rem",
        }}
      >
        {games.map((game) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={game}>
            <Paper sx={{ width: "90%", margin: "1rem" }}>
              <GameCard gameName={game} onGameStart={OpenGame} />
            </Paper>
          </Grid>
        ))}
      </Container>

      <Footer />
    </>
  );
};

export default Games;
