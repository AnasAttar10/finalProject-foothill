import { Box, Grid } from "@mui/material";
import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegistryContainer from "../../components/RegistryContainer/RegistryContainer";
// import "./register.css";

const RegisterPage = () => {
  return (
    <RegistryContainer>
      <RegisterForm />
    </RegistryContainer>
  );
};

export default RegisterPage;
