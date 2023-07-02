import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { logout } from "../../redux/authSlice";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Appbarui = ({ drawerWidth, handleDrawerToggle }) => {
  const { userName, userImage, isAdmin } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    console.log("state was updated");
  }, [userName, userImage, isAdmin]);
  console.log(userName, userImage, isAdmin);
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        color: "white",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="p"
          sx={{
            flexGrow: 1,
            "&:hover": { fontSize: "16.5px" },
            color: "white",
          }}
        >
          {/* Responsive drawer */}
          {userName}
        </Typography>
        {!isAdmin && (
          <Button
            color="inherit"
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
          >
            Logout
          </Button>
        )}
        <Avatar alt="Remy Sharp" src={userImage} />
      </Toolbar>
    </AppBar>
  );
};

export default Appbarui;
