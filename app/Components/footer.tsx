"use client";
import React from "react";
import Link from "next/link";
import "../../public/logo.png";
import { Grid, Typography } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: "#1976d2" }}>
      <Grid container spacing={2} columns={16}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src="logo.png" alt="Your Logo" sizes="80px" />
          <Typography variant="body2">
            &copy; this is my first full stack project. Felobateer 2023
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link href="/" passHref>
            <button
              style={{
                color: "inherit",
                textDecoration: "none",
                margin: "1rem",
              }}
            >
              Home
            </button>
          </Link>
          <Link href="/Friends" passHref>
            <button
              style={{
                color: "inherit",
                textDecoration: "none",
                margin: "1rem",
              }}
            >
              Friends
            </button>
          </Link>
          <Link href="/Games" passHref>
            <button
              style={{
                color: "inherit",
                textDecoration: "none",
                margin: "1rem",
              }}
            >
              Games
            </button>
          </Link>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
