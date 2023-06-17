import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Toolbar,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Create, Home, Logout, Person2, Settings } from "@mui/icons-material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@emotion/react";
const Drawerui = ({ drawerWidth, changeTheMode, modee }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const { pathname } = useLocation();
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar>
        <IconButton
          sx={{ mx: "auto" }}
          onClick={() => changeTheMode()}
          color="inherit"
        >
          {modee === "dark" ? (
            <Brightness7Icon sx={{ color: "orange" }} />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        <ListItem
          disablePadding
          sx={{
            bgcolor: pathname === "/" ? theme.palette.activeLink.main : "",
            color: pathname === "/" ? "white" : "",
          }}
        >
          <ListItemButton onClick={() => navigate("/")}>
            <ListItemIcon>
              <Home sx={{ color: pathname === "/" ? "white" : "" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            bgcolor:
              pathname === "/create" ? theme.palette.activeLink.main : "",
            color: pathname === "/create" ? "white" : "",
          }}
        >
          <ListItemButton onClick={() => navigate("/create")}>
            <ListItemIcon>
              <Create sx={{ color: pathname === "/create" ? "white" : "" }} />
            </ListItemIcon>
            <ListItemText primary="Create" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            bgcolor:
              pathname === "/profile" ? theme.palette.activeLink.main : "",
            color: pathname === "/profile" ? "white" : "",
          }}
        >
          <ListItemButton onClick={() => navigate("/profile")}>
            <ListItemIcon>
              <Person2 sx={{ color: pathname === "/profile" ? "white" : "" }} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            bgcolor:
              pathname === "/settings" ? theme.palette.activeLink.main : "",
            color: pathname === "/settings" ? "white" : "",
          }}
        >
          <ListItemButton onClick={() => navigate("/settings")}>
            <ListItemIcon>
              <Settings sx={{ color: pathname === "/" ? "white" : "" }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          sx={{
            bgcolor:
              pathname === "/logout" ? theme.palette.activeLink.main : "",
            color: pathname === "/logout" ? "white" : "",
          }}
        >
          <ListItemButton onClick={() => navigate("/logout")}>
            <ListItemIcon>
              <Logout sx={{ color: pathname === "/logout" ? "white" : "" }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerui;
