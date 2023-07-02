import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import Login from "../../components/LoginForm/Login";
import { useSelector } from "react-redux";
// import { Flare } from "@mui/icons-material";

const LoginPage = () => {
  const selectWindowScreen = async () => {
    const width = await window.outerWidth;
    return width <= 900;
  };
  return (
    <Box
      sx={
        // screenWidth <= maxWidth
        // selectWindowScreen()
        //   ? {
        //       height: "100vh",
        //       display: "flex",
        //       justifyContent: "center",
        //     }
        // :
        {
          height: "100vh",
          display: "flex",
          justifyContent: "space-between",
        }
      }
    >
      <Box
        sx={{
          width: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={
            // screenWidth <= maxWidth
            // selectWindowScreen()
            //   ? {
            //       border: "1px solid #8888",

            //       width: "100%",
            //       boxShadow: 3,
            //     }
            //   :
            {
              border: "1px solid #8888",
              width: "60%",
              boxShadow: 3,
            }
          }
        >
          <div className="img-container">
            <img
              src="https://img.freepik.com/free-vector/cute-shopping-cart-logo_23-2148453859.jpg"
              alt=""
            />
          </div>
          <Login />
        </Box>
      </Box>
      <Box className="imageContainer">
        <div className="anas"></div>
      </Box>
    </Box>
  );
};

export default LoginPage;
