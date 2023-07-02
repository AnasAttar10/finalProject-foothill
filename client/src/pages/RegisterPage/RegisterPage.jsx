import { Box } from "@mui/material";
import React from "react";
import "./register.css";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
const RegisterPage = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
      }}
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
          sx={{
            border: "1px solid #8888",
            width: "60%",
            boxShadow: 3,
          }}
        >
          <div className="img-container">
            <img
              src="https://img.freepik.com/free-vector/cute-shopping-cart-logo_23-2148453859.jpg"
              alt=""
            />
          </div>
          <RegisterForm />
        </Box>
      </Box>

      <Box className="imageContainer">
        <div className="anas"></div>
      </Box>
    </Box>
  );
};

export default RegisterPage;
{
}
