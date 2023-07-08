import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getUsersCount } from "../redux/authSlice";
import { getProductsCount } from "../redux/productSlice";
import { getcategoriesCount } from "../redux/categorySlice";
import { getUnitsCount } from "../redux/unitSlice";
const Home = () => {
  const { usersCount } = useSelector((state) => state.auth);
  const { productsCount } = useSelector((state) => state.product);
  const { categoriesCount } = useSelector((state) => state.category);
  const { unitsCount } = useSelector((state) => state.unit);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersCount());
    dispatch(getProductsCount());
    dispatch(getcategoriesCount());
    dispatch(getUnitsCount());
  }, [dispatch]);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        textAlign: "center",
        fontSize: "30px",
        color: "white",
      }}
    >
      <div
        style={{
          width: "48%",
          padding: "40px",
          margin: "1%",
          backgroundColor: "#29CAE9",
        }}
      >
        Users +{usersCount}
      </div>
      <div
        style={{
          width: "48%",
          padding: "40px",
          margin: "1%",
          backgroundColor: "#355277",
        }}
      >
        Products +{productsCount}
      </div>
      <div
        style={{
          width: "48%",
          padding: "40px",
          margin: "1%",
          backgroundColor: "#25AF7D",
        }}
      >
        Categories +{categoriesCount}
      </div>
      <div
        style={{
          width: "48%",
          padding: "40px",
          margin: "1%",
          backgroundColor: "#FF536A",
        }}
      >
        Units +{unitsCount}
      </div>
    </Box>
  );
};

export default Home;
