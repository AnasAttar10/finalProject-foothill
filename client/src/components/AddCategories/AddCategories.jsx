import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Field from "../Field/Field";
import { insertNewCategory, retriveCategory } from "../../redux/categorySlice";
import { updateCategory } from "../../redux/categorySlice";
const AddCategories = ({ isUpdateForm, itemToUpdate, dispatch }) => {
  const formik = useFormik({
    initialValues: {
      name: itemToUpdate && isUpdateForm ? itemToUpdate.name : "",
      image: itemToUpdate && isUpdateForm ? itemToUpdate.image : "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      image: Yup.string()
        .max(200, "Must be 200 characters or less")
        .required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      if (isUpdateForm) {
        const id = itemToUpdate._id;
        dispatch(updateCategory({ id, newCategory: values }));
      } else {
        dispatch(insertNewCategory(values));
      }
      resetForm();
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} style={{ padding: "10px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {isUpdateForm ? "Update " : "Add "} category
      </h2>
      <div>
        <Field
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        <ErrorMessage
          isTouched={formik.touched.name}
          errors={formik.errors.name}
        />
      </div>
      <div>
        <Field
          name="image"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.image}
        />
        <ErrorMessage
          isTouched={formik.touched.image}
          errors={formik.errors.image}
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
