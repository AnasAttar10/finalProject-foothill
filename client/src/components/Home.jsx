import React, { useEffect, useRef, useState } from "react";
import Cardui from "./Cardui/Cardui";
import Filter from "./Filter/Filter";
import data from "../data.json";
import Table from "./Table/Table";
import Container from "./Containerr/Container";
import CardsContainer from "./CardsContainer/CardsContainer";
import AddProduct from "./AddProduct/AddProduct";
import AddCategories from "./AddCategories/AddCategories";
import { Box } from "@mui/material";
import Modal from "./Modal/Modal";
import MyCart from "./MyCart/MyCart";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swiperr from "./Swiper/Swiperr";
import CategoriesContainer from "./CategoriesContainer/CategoriesContainer";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [ss, setSs] = useState("");

  // const uploadImage = async () => {
  //   const formData = new FormData();
  //   formData.append("file", ss);
  //   formData.append("upload_preset", "ml_default");
  //   const Api = "https://api.cloudinary.com/v1_1/dn90hosvg/image/upload";
  //   const result = await fetch(Api, formData);
  //   const data = await result.json();
  //   console.log(data);
  // };
  // const navigate = useNavigate();
  // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  // useEffect(() => {
  //   if (!userInfo?.isAdmin) navigate("/pos");
  // }, [navigate, userInfo?.isAdmin]);
  return (
    <>
      <p>dashpord</p>
    </>
  );
};

export default Home;
