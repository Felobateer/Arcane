"use Client";

import React from "react";
import { Box, Paper } from "@mui/material";

interface GamePlatformProps {
  game: Object;
  gameName: string;
}
const GamePlatform: React.FC<GamePlatformProps> = ({ game, gameName }) => {
  return (
    <Box>
      <Paper>
        <iframe width={800} height={600} title={gameName} />
      </Paper>
    </Box>
  );
};

export default GamePlatform;
