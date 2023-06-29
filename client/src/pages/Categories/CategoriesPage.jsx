import Container from "../../components/Containerr/Container";
import Modal from "../../components/Modal/Modal";
import Table from "../../components/Table/Table";
import AddCategories from "../../components/AddCategories/AddCategories";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Filter from "../../components/Filter/Filter";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import withGuard from "../../utils/withGuard";
import { retriveCategories } from "../../redux/categorySlice";
const CategoriesPage = ({
  isUpdateForm,
  setIsUpdateForm,
  updatedItemId,
  setUpdatedItemId,
  showModal,
  setShowModal,
  closeModal,
}) => {
  const { categories, targetCategory, isLoading, error } = useSelector(
    (state) => state.category
  );
  // const [itemToUpdate, setItemToUpdate] = useState(targetCategory);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveCategories());
  }, [dispatch]);
  return (
    <>
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
          Add Category
        </Button>
      </div>
      <Modal showModal={showModal} closeModal={closeModal}>
        <AddCategories
          isUpdateForm={isUpdateForm}
          dispatch={dispatch}
          itemToUpdate={targetCategory}
        />
      </Modal>
      <Container
        items={categories ? categories : []}
        type="categories"
        pagesizeProp={8}
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

export default withGuard(CategoriesPage);
