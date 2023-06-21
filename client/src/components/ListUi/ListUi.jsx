import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Create, Home, Logout, Person2, Settings } from "@mui/icons-material";

import React from "react";
import { useTheme } from "@emotion/react";
import { useLocation, useNavigate } from "react-router-dom";

const ListUi = () => {
  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const pages = ["Home", "Products", "Categories", "Settings", "Logout"];
  const paths = ["/", "/products", "/categories", "/settings", "/logout"];
  const Icons = [
    <Home sx={{ color: pathname === "/" ? "white" : "" }} />,
    <Create sx={{ color: pathname === paths[1] ? "white" : "" }} />,
    <Create sx={{ color: pathname === paths[2] ? "white" : "" }} />,
    <Settings sx={{ color: pathname === paths[3] ? "white" : "" }} />,
    <Logout sx={{ color: pathname === paths[4] ? "white" : "" }} />,
  ];
  return (
    <List>
      {pages.map((text, index) => (
        <ListItem
          key={text}
          disablePadding
          sx={{
            bgcolor:
              pathname === paths[index] ? theme.palette.activeLink.main : "",
            color: pathname === paths[index] ? "white" : "",
          }}
        >
          <ListItemButton onClick={() => navigate(paths[index])}>
            <ListItemIcon>{Icons[index]}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ListUi;
