import React, { useEffect, useRef } from "react";
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

const Home = () => {
  return (
    <>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", colors: "" }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          colors: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" type="text" />
          <ErrorMessage name="firstName" />

          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" type="text" />
          <ErrorMessage name="lastName" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />
          <Field
            name="colors"
            as="select"
            className="my-select"
            onChange={() => console.log("anas")}
          >
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>
          <ErrorMessage name="colors" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      123
      <MyCart />
    </>
  );
};

export default Home;

// <div>
//  <Filter /> */
// {/* {data.products.map((p) => (
{
  /* <Cardui key={Math.random()} product={p} />; */
}
// ))}
{
  /* <Table prodcts={data.products} /> */
}

{
  /* <Container items={data.products}>
        <Filter />
        <CardsContainer />
      </Container> */
}
{
  /* <AddCategories /> */
}
{
  /* <Container products={data.products}>
        <Table />
      </Container> */
}

{
  /* <div style={{ width: "80%", margin: "auto" }}>
      </div> */
}
