import { Card, Typography } from "@mui/material";
import React from "react";
import LazyLoadImagee from "../LazyLoadImage/LazyLoadImage";
import { useTheme } from "@emotion/react";

const CategoriesContainer = ({ category, selectTargetCategory }) => {
  const theme = useTheme();
  return (
    <Card
      sx={{
        textAlign: "center",
        maxWidth: 120,
        m: 2,
        "&:hover": { bgcolor: theme.palette.activeLink.main, color: "white" },
      }}
      onClick={() => selectTargetCategory(category._id)}
    >
      <Typography variant="h5">{category.name}</Typography>

      <LazyLoadImagee
        alt={category.name}
        height="100"
        width="120"
        effect="blur"
        src={category.image}
      />
    </Card>
  );
};

export default CategoriesContainer;

/*
import React, { useContext } from "react";
import Cardui from "../Cardui/Cardui";
import { ContainerContext } from "../Containerr/Container";
const CardsContainer = ({ filterdProducts }) => {
  const { targetProducts } = useContext(ContainerContext);
  console.log("inside card containers");
  console.log(targetProducts);
  const displayProducts = () => {
    return targetProducts.map((p, index) => (
      <Cardui key={p.id} product={p} index={index} />
    ));
  };
  return (
    <div>
      <h2>CardsContainer</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {displayProducts()}
      </div>
    </div>
  );
};

export default CardsContainer;
*/
