import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ChevronRight, Visibility, VisibilityOff } from "@mui/icons-material";
import Field from "../../components/Field/Field";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../redux/authSlice";
const RegisterForm = () => {
  const { error } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      profilePicture: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
      profilePicture: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
      confirmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      delete values["confirmpassword"];
      const valuesWithoutConfirmPassword = values;
      dispatch(signUp(valuesWithoutConfirmPassword));
      const success = localStorage.getItem("success");
      if (success) navigate("/login");
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <p style={{ p: 1, textAlign: "center", color: "red", boxShadow: 3 }}>
        {error}
      </p>
      <div>
        <Field
          name="userName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        <ErrorMessage
          isTouched={formik.touched.userName}
          errors={formik.errors.userName}
        />
      </div>
      <div>
        <Field
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <ErrorMessage
          isTouched={formik.touched.email}
          errors={formik.errors.email}
        />
      </div>
      <div>
        <Field
          name="profilePicture"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.profilePicture}
        />
        <ErrorMessage
          isTouched={formik.touched.profilePicture}
          errors={formik.errors.profilePicture}
        />
      </div>
      <div>
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1, height: 60 }}
        >
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            name={"password"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
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
        <ErrorMessage
          isTouched={formik.touched.password}
          errors={formik.errors.password}
        />
      </div>
      <div>
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1, height: 60 }}
        >
          <InputLabel>Confirm Password</InputLabel>
          <OutlinedInput
            name={"confirmpassword"}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
            type={showConfirmPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="start">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="confirm password"
          />
        </FormControl>
        <ErrorMessage
          isTouched={formik.touched.confirmpassword}
          errors={formik.errors.confirmpassword}
        />
      </div>
      <div
        style={{ margin: "15px", display: "flex", justifyContent: "center" }}
      >
        <Button
          variant="contained"
          sx={{ margin: "auto" }}
          type="submit"
          endIcon={<ChevronRight />}
        >
          Signup
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
