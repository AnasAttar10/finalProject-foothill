import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
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
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1 }}
        >
          <InputLabel>productName</InputLabel>
          <OutlinedInput
            id="productName"
            name="productName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productName}
          />
        </FormControl>
        {formik.touched.productName && formik.errors.productName ? (
          <div style={{ margin: "5px" }}>{formik.errors.productName}</div>
        ) : null}
      </div>
      <div>
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1 }}
        >
          <InputLabel>productCode</InputLabel>
          <OutlinedInput
            id="productCode"
            name="productCode"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productCode}
          />
        </FormControl>
        {formik.touched.productCode && formik.errors.productCode ? (
          <div style={{ margin: "5px" }}>{formik.errors.productCode}</div>
        ) : null}
      </div>
      <div>
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1 }}
        >
          <InputLabel>productPrice</InputLabel>
          <OutlinedInput
            id="productPrice"
            name="productPrice"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productPrice}
          />
        </FormControl>
        {formik.touched.productPrice && formik.errors.productPrice ? (
          <div style={{ margin: "5px" }}>{formik.errors.productPrice}</div>
        ) : null}
      </div>
      <div>
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1 }}
        >
          <InputLabel>productImage</InputLabel>
          <OutlinedInput
            id="productImage"
            name="productImage"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productImage}
          />
        </FormControl>
        {formik.touched.productImage && formik.errors.productImage ? (
          <div style={{ margin: "5px" }}>{formik.errors.productImage}</div>
        ) : null}
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

/* <select
            id="productCategory"
            className="form-select form-select-lg mt-1 mb-3 w-100"
            aria-label=".form-select-lg example"
            name="productCategory"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.productCategory}
          >
            <option defaultValue>Choose The Category</option>
            <option value="fruits">fruits</option>
            <option value="vegetable">vegetable</option>
            <option value="chicken">chicken</option>
            <option value="meat">meat</option>
          </select> 
          */
