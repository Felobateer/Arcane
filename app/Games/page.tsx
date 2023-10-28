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
  const [game, setGame] = useState<string>("Hello");

  const OpenGame = (gameName: string) => {
    switch (gameName) {
      case "snake":
        fetch("http://localhost:3000/Games/snake")
          .then((res) => res.blob())
          .then((gameData) => {
            setGameOn(true);

            console.log(gameData);
          })
          .catch((error) => {
            console.error("Error fetching the game:", error);
          });
        break;
    }
  };
  return (
    <>
      <Navbar />
      <Typography variant="h2" sx={{ margin: "1rem" }}>
        Games
      </Typography>
      {gameOn ? <GamePlatform game={game} /> : null}
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
