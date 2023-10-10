import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Blog() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        border: "1px lightgray solid",
        borderRadius: "1rem",
        marginTop: "1rem",
      }}
    >
      <Paper
        elevation={3}
        style={{ margin: "10px", padding: "20px", marginBottom: "20px" }}
      >
        <Typography variant="h4" gutterBottom>
          title
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          date
        </Typography>
        <Typography variant="body1">content</Typography>
      </Paper>
    </Container>
  );
}

export default Blog;
