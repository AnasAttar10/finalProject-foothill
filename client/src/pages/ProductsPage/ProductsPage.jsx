import Container from "../../components/Containerr/Container";
import Table from "../../components/Table/Table";
import data from "../../data.json";
import Filter from "../../components/Filter/Filter";
import { Button } from "@mui/material";
import AddProduct from "../../components/AddProduct/AddProduct";
import Modal from "../../components/Modal/Modal";
import AddIcon from "@mui/icons-material/Add";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retriveProducts } from "../../redux/productSlice";
import withGuard from "../../utils/withGuard";
import ShowErrors from "../../components/ShowErrors/ShowErrors";
const ProductsPage = ({
  isUpdateForm,
  setIsUpdateForm,
  updatedItemId,
  setUpdatedItemId,
  showModal,
  setShowModal,
  closeModal,
}) => {
  const { products, targetProduct, isLoading, error } = useSelector(
    (state) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveProducts());
  }, [dispatch, products?.length]);
  return (
    <>
      <ShowErrors error={error} />
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={async () => {
            await setUpdatedItemId("");
            await setIsUpdateForm(false);
            await setShowModal(true);
          }}
          sx={{ marginRight: 2 }}
        >
          Add Product
        </Button>
      </div>
      <Modal showModal={showModal} closeModal={closeModal}>
        <AddProduct
          isUpdateForm={isUpdateForm}
          dispatch={dispatch}
          itemToUpdate={targetProduct}
          setShowModal={setShowModal}
        />
      </Modal>
      <Container
        items={products ? products : []}
        pagesizeProp={8}
        type="products"
      >
        <Filter />
        <Table
          setShowModal={setShowModal}
          setIsUpdateForm={setIsUpdateForm}
          dispatch={dispatch}
        />
      </Container>
    </>
  );
};

export default withGuard(ProductsPage);
