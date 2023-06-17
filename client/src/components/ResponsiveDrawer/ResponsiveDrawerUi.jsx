import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Link } from "@mui/material";
import { Create, Home, Logout, Person2, Settings } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

const drawerWidth = 240;

const ResponsiveDrawer = (props) => {
  const { window } = props;
  const { changeTheMode, modee } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const pages = ["Home", "Products", "Profile", "Settings", "Logout"];
  const paths = ["/", "/products", "/profile", "/settings", "/logout"];
  const Icons = [
    <Home sx={{ color: pathname === "/" ? "white" : "" }} />,
    <Create sx={{ color: pathname === paths[1] ? "white" : "" }} />,
    <Person2 sx={{ color: pathname === paths[2] ? "white" : "" }} />,
    <Settings sx={{ color: pathname === paths[3] ? "white" : "" }} />,
    <Logout sx={{ color: pathname === paths[4] ? "white" : "" }} />,
  ];
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
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
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
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
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
          {/* added */}
          <Link
            sx={{
              flexGrow: 1,
              "&:hover": { fontSize: "16.5px" },
              color: "white",
            }}
            underline="none"
            // color={"inherit"}
          >
            Anas Attar
          </Link>
          <Button color="inherit">Login</Button>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Toolbar>
      </AppBar>
      {/* <AppBar
        position="static"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Link
            sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
            underline="none"
            color={"inherit"}
          >
            Anas Attar
          </Link>
          <Button color="inherit">Login</Button>
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        {/* this Drawer for mobile  */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* this Drawer from computer screens  */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      {/* main content  */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
