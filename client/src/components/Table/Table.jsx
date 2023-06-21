import { useTheme } from "@emotion/react";
import React, { useContext } from "react";
import { ContainerContext } from "../Containerr/Container";
import Row from "../Row/Row";

const Table = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const { targetProducts, type } = useContext(ContainerContext);
  const displayProducts = () => {
    return targetProducts.map((p, index) => (
      <Row key={p.id} item={p} index={index} type={type} />
    ));
  };
  return (
    <table
      className="table"
      style={isDark ? { color: "white" } : { color: "black" }}
    >
      <thead>
        {type === "products" && (
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
        )}
        {type === "categories" && (
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>update</th>
            <th>remove</th>
          </tr>
        )}
      </thead>
      <tbody>{displayProducts()}</tbody>
    </table>
  );
};

export default Table;
