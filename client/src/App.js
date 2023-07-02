import * as React from "react";
import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { CssBaseline, Switch, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { pink, teal } from "@mui/material/colors";
import ResponsiveDrawer from "./components/ResponsiveDrawer/ResponsiveDrawerUi";
import Home from "./components/Home";
import Create from "./components/Create";
import { useState } from "react";
import "./App.css";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import MyCart from "./components/MyCart/MyCart";
import PosPage from "./pages/PosPage/PosPage";
import UnitsPage from "./pages/UnitsPage/UnitsPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { useDispatch, useSelector } from "react-redux";
const App = () => {
  const [modee, setModee] = useState("light");
  const darkTheme = createTheme({
    palette: {
      // mode:modee
      mode: modee,
      ...(modee === "light"
        ? {
            activeLink: {
              main: pink[500],
            },
          }
        : {
            activeLink: {
              main: teal[500],
            },
          }),
    },
  });
  const changeTheMode = () => {
    modee === "dark" ? setModee("light") : setModee("dark");
  };
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Routes>
          <Route
            path="/"
            element={
              <ResponsiveDrawer changeTheMode={changeTheMode} modee={modee} />
            }
          >
            <Route
              index
              element={
                <ProtectedRouteToAdmin>
                  <Home />
                </ProtectedRouteToAdmin>
              }
            />
            <Route
              path="products"
              element={
                <ProtectedRouteToAdmin>
                  <ProductsPage />
                </ProtectedRouteToAdmin>
              }
            />
            <Route
              path="categories"
              element={
                <ProtectedRouteToAdmin>
                  <CategoriesPage />
                </ProtectedRouteToAdmin>
              }
            />
            <Route
              path="units"
              element={
                <ProtectedRouteToAdmin>
                  <UnitsPage />
                </ProtectedRouteToAdmin>
              }
            />
            <Route
              path="pos"
              element={
                <ProtectedRouteToLoggedIn>
                  <PosPage />
                </ProtectedRouteToLoggedIn>
              }
            />
          </Route>

          <Route path="login" element={<LoginPage />} />

          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;

const ProtectedRouteToAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const isAdmin = JSON.parse(localStorage.getItem("userInfo"))?.isAdmin;
  if (!token || !isAdmin) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  } else {
    return children;
  }
};

const ProtectedRouteToLoggedIn = ({ children }) => {
  const location = useLocation();
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to={"/login"} replace state={{ from: location }} />;
  } else {
    return children;
  }
};
