import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
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
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1 }}
        >
          <InputLabel>categoryName</InputLabel>
          <OutlinedInput
            id="categoryName"
            name="categoryName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryName}
          />
        </FormControl>
        {formik.touched.categoryName && formik.errors.categoryName ? (
          <div style={{ margin: "5px" }}>{formik.errors.categoryName}</div>
        ) : null}
      </div>
      <div>
        <FormControl
          position="start"
          fullWidth
          variant="outlined"
          sx={{ p: 1 }}
        >
          <InputLabel>categoryImage</InputLabel>
          <OutlinedInput
            id="categoryImage"
            name="categoryImage"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.categoryImage}
          />
        </FormControl>
        {formik.touched.categoryImage && formik.errors.categoryImage ? (
          <div style={{ margin: "5px" }}>{formik.errors.categoryImage}</div>
        ) : null}
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
