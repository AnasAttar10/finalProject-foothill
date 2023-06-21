import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Field from "../Field/Field";
import Select from "../Select/Select";
import { Box, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddCart = ({ addCart }) => {
  // const [carts, setCarts] = useState(["cart1 ", "cart2"]);

  const ref = useRef();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
        }}
      >
        <input type="text" ref={ref} placeholder="Enter Your Cart" />
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => addCart(ref.current)}
        >
          Add
        </Button>
      </Box>
    </>
  );
};

export default AddCart;

/* <Select
          name="carts"
          handleChange={selectTheCart}
          // handleBlur={formik.handleBlur}
          values={formik.values.carts}
          options={carts}
        /> 
    */
// const formik = useFormik({
//   initialValues: {
//     name1: "",
//   },
//   validationSchema: Yup.object({
//     name1: Yup.string()
//       .max(15, "Must be 15 characters or less")
//       .required("Required"),
//   }),
//   onSubmit: (values) => {
//     alert(JSON.stringify(values, null, 2));
//     console.log(values);
//     // addCart(values);
//   },
// });
// const handleChange = (e) => {
//   console.log(e.target.value);
// };
