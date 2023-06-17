import React, { useContext } from "react";
import Cardui from "../Cardui/Cardui";
import { ContainerContext } from "../Containerr/Container";
const CardsContainer = ({ filterdProducts }) => {
  const { targetProducts } = useContext(ContainerContext);
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
