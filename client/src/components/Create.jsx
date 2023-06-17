import { styled } from "@mui/material/styles";
import { ChevronRight, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import React, { useState } from "react";
import { useTheme } from "@emotion/react";

const Create = () => {
  const theme = useTheme();
  console.log(theme);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  return (
    <Box
      sx={{ border: "1px solid #8888", p: 2, width: "50%", mx: "auto" }}
      component="form"
    >
      <h2>anas attarr</h2>
      <FormControl position="start" fullWidth variant="outlined" sx={{ p: 1 }}>
        <InputLabel>UserName</InputLabel>
        <OutlinedInput />
      </FormControl>

      <FormControl fullWidth variant="outlined" sx={{ p: 1 }}>
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="start">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <TextField
        fullWidth
        label="The Price"
        sx={{ p: 1, my: 1 }}
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <ColorButton variant="contained">
        Submit <ChevronRight fontSize="small" />
      </ColorButton>
    </Box>
  );
};

export default Create;
