import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  Toolbar,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

const Appbarui = ({ drawerWidth, handleDrawerToggle }) => {
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
  );
};

export default Appbarui;

// import React from "react";
// import { AppBar, Button, Toolbar, Avatar, Link } from "@mui/material";

// const Appbarui = ({ drawerWidth }) => {
//   return (
//     <AppBar
//       position="static"
//       sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//     >
//       <Toolbar>
//         <Link
//           sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
//           underline="none"
//           color={"inherit"}
//         >
//           Anas Attar
//         </Link>
//         <Button color="inherit">Login</Button>
//         <Avatar
//           alt="Remy Sharp"
//           src="https://mui.com/static/images/avatar/2.jpg"
//         />
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Appbarui;

// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { Link } from "react-router-dom";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function ResponsiveAppBar({ drawerWidth }) {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar
//       position="static"
//       sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//     >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* 4 */}
//           <Link
//             sx={{ flexGrow: 1, "&:hover": { fontSize: "16.5px" } }}
//             underline="none"
//             color={"inherit"}
//           >
//             Anas Attar
//           </Link>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Button color="inherit">Login</Button>
//             <Avatar
//               alt="Remy Sharp"
//               src="https://mui.com/static/images/avatar/2.jpg"
//             />
//             {/* 3 */}
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             <Button color="inherit">Login</Button>
//             <Avatar
//               alt="Remy Sharp"
//               src="https://mui.com/static/images/avatar/2.jpg"
//             />
//           </Box>
//           {/* 2 */}
//           {/* 1 */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;

/*
هذا عندما اضغط على الدائرة يلي بداخلها حرف تظهر لي قائمة الاعدادات 
<Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
*/
/*
هذه تظهر لي الصفحات التي عندي في حالة الشاشة الكبيرة 
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
*/
/*
هذه تظهر لي الصفحات في حالة الشاشة تكون صغيره عند الضغط على ايقونه المينيو
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
*/
/*
هذه تظهرلي نص بشكل جميل في حالة الشاشة الصغيرة + ايقونه ايضا في الشاشات الصعيرة 
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            osed Attar
          </Typography>
*/
/*
هذه نص يوضع فيه مثلا اسم الشخص او ما شابه 
 <Typography
            variant="h6"
            noWrap
            component="p"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Anas Attar
          </Typography>
*/
