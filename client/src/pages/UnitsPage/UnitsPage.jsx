import React, { useEffect } from "react";
import withGuard from "../../utils/withGuard";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Modal from "../../components/Modal/Modal";
// import AddUnit from "../../components/AddUnit";
import Filter from "../../components/Filter/Filter";
import Table from "../../components/Table/Table";
import Container from "../../components/Containerr/Container";
import AddUnit from "../../components/AddUnit/AddUnit";
import { useDispatch, useSelector } from "react-redux";
import { retriveUnits } from "../../redux/unitSlice";
const UnitsPage = ({
  isUpdateForm,
  setIsUpdateForm,
  updatedItemId,
  setUpdatedItemId,
  showModal,
  setShowModal,
  closeModal,
}) => {
  const { units, targetUnit, isLoading, error } = useSelector(
    (state) => state.unit
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retriveUnits());
  }, [dispatch]);
  return (
    <>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => {
            setShowModal(true);
            setIsUpdateForm(false);
            setUpdatedItemId("");
          }}
          sx={{ marginRight: 2 }}
        >
          Add Unit
        </Button>
      </div>
      <Modal showModal={showModal} closeModal={closeModal}>
        <AddUnit
          isUpdateForm={isUpdateForm}
          dispatch={dispatch}
          itemToUpdate={targetUnit}
        />
      </Modal>
      <Container items={units ? units : []} type="units" pagesizeProp={8}>
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

export default withGuard(UnitsPage);
