import React from "react";
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
const Home = () => {
  return (
    <div>
      {/* <Filter /> */}
      {/* {data.products.map((p) => (
        <Cardui key={Math.random()} product={p} />
      ))} */}
      {/* <Table prodcts={data.products} /> */}

      <Container products={data.products}>
        <Filter />
        <CardsContainer />
      </Container>
      {/* <Container products={data.products}>
        <Table />
      </Container> */}

      {/* <div style={{ width: "80%", margin: "auto" }}>
      </div> */}
    </div>
  );
};

export default Home;
