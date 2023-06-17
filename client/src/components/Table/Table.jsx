import { useTheme } from "@emotion/react";
import React, { useContext } from "react";
import { ContainerContext } from "../Containerr/Container";
import Row from "../Row/Row";

const Table = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { targetProducts } = useContext(ContainerContext);
  const displayProducts = () => {
    return targetProducts.map((p, index) => (
      <Row key={p.id} product={p} index={index} />
    ));
  };
  return (
    <table
      className="table"
      style={isDark ? { color: "white" } : { color: "black" }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Code</th>
          <th>Category</th>
          <th>Image</th>
          <th>Price</th>
          <th>unitOfMeasure</th>
          <th>update</th>
          <th>remove</th>
        </tr>
      </thead>
      <tbody>{displayProducts()}</tbody>
    </table>
  );
};

export default Table;
