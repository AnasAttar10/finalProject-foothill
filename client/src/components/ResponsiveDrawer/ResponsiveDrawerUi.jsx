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
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Avatar, Button, Link } from "@mui/material";
import { Create, Home, Logout, Person2, Settings } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import ToolBar from "../ToolBar/ToolBar";
import Drawerr from "../Drawer/Drawerr";
import Appbarui from "../AppBar/Appbarui";
import ListUi from "../ListUi/ListUi";
import MyCart from "../MyCart/MyCart";

const ResponsiveDrawer = (props) => {
  const { pathname } = useLocation();
  let drawerWidth = 240;
  if (pathname === "/admin") drawerWidth = 350;
  console.log(pathname);
  const { window } = props;
  const { changeTheMode, modee } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <ToolBar changeTheMode={changeTheMode} modee={modee} />
      <Divider />
      {pathname === "/admin" ? <MyCart /> : <ListUi />}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbarui
        drawerWidth={drawerWidth}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawerr
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
          drawer={drawer}
        />
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
