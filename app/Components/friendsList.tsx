"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { FriendType } from "../server and data/friendsType";
import postArray from "../server and data/Posts.json";

const FriendsList = () => {
  const friends = postArray;

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{
          minWidth: 150,
        }}
        aria-aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Contacts</TableCell>
            <TableCell align="right">
              {" "}
              <SearchIcon />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {friends.map((friend) => (
            <TableRow
              key={friend.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={friend.profileImage} alt="n/a" />
              </TableCell>
              <TableCell align="left">
                {friend.first_name} {friend.last_name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default FriendsList;
