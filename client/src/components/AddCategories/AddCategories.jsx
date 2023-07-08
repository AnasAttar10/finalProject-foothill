import { Button, FormControl, InputLabel, OutlinedInput } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import SaveIcon from "@mui/icons-material/Save";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Field from "../Field/Field";
import {
  insertNewCategory,
  retriveCategory,
  uploadCategoryPicture,
} from "../../redux/categorySlice";
import { updateCategory } from "../../redux/categorySlice";
const AddCategories = ({
  isUpdateForm,
  itemToUpdate,
  dispatch,
  setShowModal,
}) => {
  const [imageFile, setImageFile] = useState("");
  const [imageName, setImageName] = useState(
    itemToUpdate && isUpdateForm ? itemToUpdate.image : ""
  );
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
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      const categoryPicture = values.image;
      if (imageFile) values.image = "12";
      if (isUpdateForm) {
        const id = itemToUpdate._id;
        dispatch(updateCategory({ id, newCategory: values }));
      } else {
        const result = await dispatch(insertNewCategory(values));
      }
      if (imageFile) await dispatch(uploadCategoryPicture({ categoryPicture }));

      resetForm();
      setShowModal(false);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ width: "70%" }}>
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
        <Button
          variant="contained"
          sx={{ m: 1 }}
          type="submit"
          endIcon={<SaveIcon />}
        >
          Save
        </Button>
      </div>
      <div style={{ width: "50%" }}>
        <img
          style={{
            width: "100%",
            height: "100%",
            boxShadow: 3,
            border: "1px solid #8888",
          }}
          src={
            itemToUpdate && isUpdateForm
              ? imageFile
                ? require(`../../assets/${imageName}`)
                : imageName
              : imageFile
              ? require(`../../assets/${imageName}`)
              : require("../../assets/empty.jpg")
          }
          alt="empty_image"
        />
        <label> Upload File</label>
        <input
          type="file"
          // name="image"
          // accept="image/*"
          onChange={(e) => {
            setImageName(e.currentTarget.files[0].name);
            setImageFile(e.currentTarget.files[0]);
            formik.setFieldValue("image", e.currentTarget.files[0]);
          }}
        />
        <ErrorMessage
          isTouched={formik.touched.image}
          errors={formik.errors.image}
        />
      </div>
    </form>
  );
};

export default AddCategories;
