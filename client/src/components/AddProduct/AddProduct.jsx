import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@mui/material";
import Field from "../Field/Field";
import Select from "../Select/Select";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SaveIcon from "@mui/icons-material/Save";

const AddProduct = () => {
  const formik = useFormik({
    initialValues: {
      productName: "",
      productCode: "",
      productPrice: "",
      productCategory: "",
      productImage: "",
      unitOfMeasure: "",
    },
    validationSchema: Yup.object({
      productName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      productCode: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      productCategory: Yup.string()
        // .max(15, "Must be 15 characters or less")
        .required("Required"),
      unitOfMeasure: Yup.string()
        // .max(20, "Must be 20 characters or less")
        .required("Required"),
      productPrice: Yup.number().required("Required"),
      productImage: Yup.string()
        .max(100, "Must be 20 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const categories = ["fruits", "vegetable", "chicken", "meat"];
  const unitsOfMeasure = ["fruits", "vegetable", "chicken", "meat"];
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Add Product</h2>
      <div>
        <Field
          name="productName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productName}
        />
        <ErrorMessage
          isTouched={formik.touched.productName}
          errors={formik.errors.productName}
        />
      </div>
      <div>
        <Field
          name="productCode"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productCode}
        />
        <ErrorMessage
          isTouched={formik.touched.productCode}
          errors={formik.errors.productCode}
        />
      </div>
      <div>
        <Field
          name="productPrice"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productPrice}
        />
        <ErrorMessage
          isTouched={formik.touched.productPrice}
          errors={formik.errors.productPrice}
        />
      </div>
      <div>
        <Field
          name="productImage"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.productImage}
        />
        <ErrorMessage
          isTouched={formik.touched.productImage}
          errors={formik.errors.productImage}
        />
      </div>
      <div>
        <Select
          name="productCategory"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          values={formik.values.productCategory}
          options={categories}
        />
        <ErrorMessage
          isTouched={formik.touched.productCategory}
          errors={formik.errors.productCategory}
        />
      </div>

      <div>
        <Select
          name="unitOfMeasure"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          values={formik.values.unitOfMeasure}
          options={unitsOfMeasure}
        />
        <ErrorMessage
          isTouched={formik.touched.unitOfMeasure}
          errors={formik.errors.unitOfMeasure}
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        sx={{ m: 1 }}
        endIcon={<SaveIcon />}
      >
        Send
      </Button>
    </form>
  );
};

export default AddProduct;
