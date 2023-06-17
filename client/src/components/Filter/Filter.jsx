import { Box, FormControl, TextField } from "@mui/material";
import { ContainerContext } from "../Containerr/Container";
import React, { useContext } from "react";

const Filter = () => {
  const { filterdValue, handleFilter } = useContext(ContainerContext);
  return (
    <Box
      sx={{
        m: 2,
        width: "100%",
        mx: "auto",
        border: "none",
      }}
      component="form"
    >
      <FormControl position="start" fullWidth variant="outlined" sx={{ p: 1 }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          value={filterdValue}
          onChange={handleFilter}
        ></TextField>
      </FormControl>
    </Box>
  );
};

export default Filter;
