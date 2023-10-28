"use Client";

import React from "react";
import { Box, Paper } from "@mui/material";

interface GamePlatformProps {
  game: string;
}
const GamePlatform: React.FC<GamePlatformProps> = ({ game }) => {
  return (
    <Box>
      <Paper>{game}</Paper>
    </Box>
  );
};

export default GamePlatform;
