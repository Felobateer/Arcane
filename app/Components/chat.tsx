"use Client";

import React from "react";
import { Container, Box, TextField } from "@mui/material";

const Chat = () => {
  return (
    <Container style={{ background: "#DEDEDE", height: "95vh" }}>
      <Box
        style={{
          minWidth: "450px",
          height: "80vh",
          width: "100%",
        }}
      >
        Hello
      </Box>
      <Box>
        <TextField style={{ minWidth: "450px", width: "100%" }}></TextField>
      </Box>
    </Container>
  );
};

export default Chat;
