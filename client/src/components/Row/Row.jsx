import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import LazyLoadImagee from "../LazyLoadImage/LazyLoadImage";
const Row = ({ type, item, index }) => {
  return (
    <tr>
      {type === "products" && (
        <>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.Code}</td>
          <td>{item.Category}</td>
          <td>
            <LazyLoadImagee
              src={item.Image}
              alt={item.name}
              width={70}
              height={70}
            />
          </td>
          <td>{item.Price}</td>
          <td>{item.unitOfMeasure}</td>
          <td style={{ color: "#9c27b0" }}>
            <EditIcon />
          </td>
          <td style={{ color: "#e91e63" }}>
            <DeleteOutlineIcon />
          </td>
        </>
      )}
      {type === "categories" && (
        <>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>
            <LazyLoadImagee
              src={item.Image}
              alt={item.name}
              width={70}
              height={70}
            />
          </td>
          <td style={{ color: "#9c27b0" }}>
            <EditIcon />
          </td>
          <td style={{ color: "#e91e63" }}>
            <DeleteOutlineIcon />
          </td>
        </>
      )}
    </tr>
  );
};

export default Row;
