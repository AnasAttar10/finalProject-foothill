import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import LazyLoadImagee from "../LazyLoadImage/LazyLoadImage";
const Row = ({ product, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.productName}</td>
      <td>{product.productCode}</td>
      <td>{product.productCategory}</td>
      <td>
        {/* <img
          style={{ width: 70, height: 70 }}

        /> */}
        <LazyLoadImagee
          src={product.productImage}
          alt={product.productName}
          width={70}
          height={70}
        />
      </td>
      <td>{product.productPrice}</td>
      <td>{product.unitOfMeasure}</td>
      <td style={{ color: "#9c27b0" }}>
        <EditIcon />
      </td>
      <td style={{ color: "#e91e63" }}>
        <DeleteOutlineIcon />
      </td>
    </tr>
  );
};

export default Row;
