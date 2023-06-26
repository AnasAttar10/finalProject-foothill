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
const ProductsPage = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const { products, isLoading, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // const { products } = data;
  useEffect(() => {
    dispatch(retriveProducts());
  }, [dispatch]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => setShowModal(true)}
          sx={{ marginRight: 2 }}
        >
          Add Product
        </Button>
      </div>
      <Modal showModal={showModal} closeModal={closeModal}>
        <AddProduct />
      </Modal>
      <Container items={products} type="products">
        <Filter />
        <Table />
      </Container>
    </>
  );
};

export default ProductsPage;
