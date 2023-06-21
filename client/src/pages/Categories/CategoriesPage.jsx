import Container from "../../components/Containerr/Container";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import AddCategories from "../../components/AddCategories/AddCategories";
import React, { useState } from "react";
import data from "../../data.json";
import AddIcon from "@mui/icons-material/Add";
import Filter from "../../components/Filter/Filter";
import { Button } from "@mui/material";
const CategoriesPage = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };

  const { Categories } = data;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => setShowModal(true)}
          sx={{ marginRight: 2 }}
        >
          Add Category
        </Button>
      </div>
      <Modal showModal={showModal} closeModal={closeModal}>
        <AddCategories />
      </Modal>
      <Container items={Categories} type="categories">
        <Filter />
        <Table />
      </Container>
    </>
  );
};

export default CategoriesPage;
