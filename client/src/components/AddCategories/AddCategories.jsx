import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Field from "../Field/Field";
const AddCategories = () => {
  const formik = useFormik({
    initialValues: {
      categoryName: "",
      categoryImage: "",
    },
    validationSchema: Yup.object({
      categoryName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      categoryImage: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Add Category{" "}
      </h2>
      <div>
        <Field
          name="categoryName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.categoryName}
        />
        <ErrorMessage
          isTouched={formik.touched.categoryName}
          errors={formik.errors.categoryName}
        />
      </div>
      <div>
        <Field
          name="categoryImage"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.categoryImage}
        />
        <ErrorMessage
          isTouched={formik.touched.categoryImage}
          errors={formik.errors.categoryImage}
        />
      </div>
      <Button
        variant="contained"
        sx={{ m: 1 }}
        type="submit"
        endIcon={<SaveIcon />}
      >
        Save
      </Button>
    </form>
  );
};

export default AddCategories;
