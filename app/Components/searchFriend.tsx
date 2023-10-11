"use client";
import {
  Container,
  Box,
  TextField,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";

interface Film {
  title: string;
  year: number;
}

const SearchFriend = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<readonly Film[]>([]);
  const loading = open && options.length == 0;

  return (
    <>
      <Box>
        {/* <Autocomplete
            sx={{ width: 500 }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            isOptionEqualToValue={(options, value) => options.title === value.title}
            getOptionLabel={(options) => options.title}
            options={options}
            loading={loading}
            renderInput={(params) => (
              <TextField
              {... params}
              label="search a friend's name"
              InputProps={{
                  ...params.InputProps,
                  // endAdornment: (
                  //     <React.Fragment>
                  //         {loading ? <CircularProgress color="inherit" size={20} /> : null}
                  //         {params.InputLabelProps.endAdornment}
                  //     </React.Fragment>
                  // ),
              }}
            )}
  /> */}
      </Box>
    </>
  );
};

export default SearchFriend;
