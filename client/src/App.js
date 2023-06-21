import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { CssBaseline, createTheme } from "@mui/material";
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
const App = () => {
  const [modee, setModee] = useState("light");
  const darkTheme = createTheme({
    palette: {
      // mode:modee
      mode: modee,
      ...(modee === "light"
        ? {
            anas: {
              main: "teal",
            },
            activeLink: {
              main: pink[500],
            },
          }
        : {
            anas: {
              main: "red",
            },
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
            <Route index element={<Home />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
          </Route>
          <Route
            path="/admin"
            // element={<MyCart changeTheMode={changeTheMode} modee={modee} />}
            element={
              <ResponsiveDrawer changeTheMode={changeTheMode} modee={modee} />
            }
          />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
