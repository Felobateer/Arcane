import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

interface BlogProps {
  title: string;
  date: string;
  content: string | null;
  pic: string | null;
  profileImage: string;
}

const Blog = ({ title, date, content, pic, profileImage }: BlogProps) => {
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
        <img src={profileImage} alt="profile image" />
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {date.toLocaleString()}
        </Typography>
        <Typography variant="body1">{content}</Typography>
        {typeof pic === "string" ? <img src={pic} alt="post picture" /> : null}
      </Paper>
    </Container>
  );
};

export default Blog;
