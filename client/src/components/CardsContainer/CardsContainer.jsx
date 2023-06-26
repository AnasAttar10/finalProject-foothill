import React, { useContext } from "react";
import Cardui from "../Cardui/Cardui";
import { ContainerContext } from "../Containerr/Container";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";
import { Box } from "@mui/material";
const CardsContainer = ({ filterdProducts }) => {
  const { targetItems } = useContext(ContainerContext);
  const displayProducts = () => {
    return targetItems.map((p, index) => (
      <Cardui key={p._id} product={p} index={index} />
    ));
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "50px",
        flexWrap: "wrap",
      }}
    >
      {displayProducts()}
    </Box>
  );
};

export default CardsContainer;
