import Filter from "../../components/Filter/Filter";
import Container from "../../components/Containerr/Container";
import React, { useEffect, useState } from "react";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import Swiperr from "../../components/Swiper/Swiperr";
import CachedIcon from "@mui/icons-material/Cached";
import { Box, IconButton } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { retriveProducts } from "../../redux/productSlice";
import { retriveCategories } from "../../redux/categorySlice";
const PosPage = () => {
  const { products } = useSelector((state) => state.product);
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [targetCategory, setTargetCategory] = useState("");
  const selectTargetCategory = (id) => {
    setTargetCategory(id);
  };
  const ProductsBySearchCategory = targetCategory
    ? products.filter((p) => p.category._id === targetCategory)
    : "";
  useEffect(() => {
    dispatch(retriveProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(retriveCategories());
  }, [dispatch]);
  return (
    <>
      <Box sx={{ boxShadow: 3, p: 1, m: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <h2>select category :</h2>
          <IconButton onClick={() => setTargetCategory("")}>
            <CachedIcon />
          </IconButton>
        </Box>

        <Swiperr
          items={categories}
          selectTargetCategory={selectTargetCategory}
        />
      </Box>
      <Box sx={{ m: 1, p: 1, boxShadow: 3 }}>
        <Container
          items={targetCategory ? ProductsBySearchCategory : products}
          pagesizeProp={8}
        >
          <Box
            sx={{
              m: 1,
              p: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              boxShadow: 3,
            }}
          >
            <h2>List of Products</h2>
            <Filter />
          </Box>
          <CardsContainer />
        </Container>
      </Box>
    </>
  );
};

export default PosPage;
