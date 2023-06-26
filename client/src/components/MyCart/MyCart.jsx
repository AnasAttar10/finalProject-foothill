import { Box, Button, Typography } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddCart from "../AddCart/AddCart";
import Field from "../Field/Field";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useSelector, useDispatch } from "react-redux";
import {
  InsertNewCart,
  chooseCurrentCart,
  decreseProductQuantity,
  increseProductQuantity,
  removeeProduct,
  retriveCarts,
} from "../../redux/cartSlice";

const MyCart = () => {
  const { carts, products1, isLoading, error } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const formik = useFormik({
    initialValues: {
      cartId: "",
      tax: 0,
      discount: 0,
    },
    validationSchema: Yup.object({
      cartId: Yup.string().required("Required"),
      tax: Yup.number()
        .max(100, "should be less than 100 ")
        .min(0, "should be more than or equal 0 "),
      discount: Yup.number()
        .max(100, "should be less than 100 ")
        .min(0, "should be more than or equal 0 "),
    }),
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  const cartsName = carts && carts.map((c) => c.name);
  const cartsId = carts && carts.map((c) => c._id);
  const formikValue = formik.values.cartId;
  const currentCart = carts.find((c) => c._id === formikValue);
  const cartId = currentCart?._id;
  // console.log(cartId);
  const increseQuantity = (id, productQuantity) => {
    productQuantity++;
    dispatch(
      increseProductQuantity({ cartId: cartId, productId: id, productQuantity })
    );
  };
  const decreseQuantity = (id, productQuantity) => {
    productQuantity--;
    dispatch(
      decreseProductQuantity({ cartId: cartId, productId: id, productQuantity })
    );
  };
  const addCart = (newCart) => {
    const newCart1 = { name: newCart.cartName, products: [] };
    dispatch(InsertNewCart(newCart1));
    newCart.value = "";
  };
  const removeProduct = (id) => {
    console.log(id);
    dispatch(removeeProduct({ cartId: cartId, productId: id }));
  };

  useEffect(() => {
    dispatch(retriveCarts());
  }, [dispatch]);

  useEffect(() => {
    if (cartId) dispatch(chooseCurrentCart(cartId));
  }, [dispatch, cartId]);

  const totalPrice = products1.reduce(
    (sum, currentValue) =>
      sum + currentValue.product.price * currentValue.quantity,
    0
  );
  const handletaxChange = (event) => {
    setTax(event.target.value);
    formik.handleChange(event);
  };
  const handlediscoundChange = (event) => {
    setDiscount(event.target.value);
    formik.handleChange(event);
  };
  const handkeCartIdChange = (event) => {
    formik.handleChange(event);
  };
  const totalPriceAfterTax = (totalPrice * tax) / 100 + totalPrice;
  const totalPriceAfterDiscountAndTax =
    totalPriceAfterTax - (totalPriceAfterTax * discount) / 100;
  return (
    <>
      <AddCart addCart={addCart} />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ width: "90%", margin: "auto" }}>
          <select
            id="cartId"
            className="form-select form-select-lg mt-1 mb-3 w-90"
            aria-label=".form-select-lg example"
            name="cartId"
            onChange={handkeCartIdChange}
            onBlur={formik.handleBlur}
            value={formik.values.cartId}
          >
            <option defaultValue>Select your Cart </option>
            {cartsName.map((v, i) => (
              <option value={cartsId[i]} key={Math.random()}>
                {v}
              </option>
            ))}
          </select>
          <ErrorMessage
            isTouched={formik.touched.cartId}
            errors={formik.errors.cartId}
          />
        </Box>

        <Box
          component="div"
          sx={{
            flexShrink: { sm: 0 },
            overflow: "auto",
            height: "220px",
            margin: "5px",
          }}
          aria-label="mailbox folders"
        >
          {cartId &&
            products1.map((p) => (
              <CartItem
                key={p._id}
                product={p}
                removeProduct={removeProduct}
                increseQuantity={increseQuantity}
                decreseQuantity={decreseQuantity}
              />
            ))}
        </Box>

        <div>
          <Field
            name="tax"
            onChange={handletaxChange}
            onBlur={formik.handleBlur}
            value={formik.values.tax}
          />
          <ErrorMessage
            isTouched={formik.touched.tax}
            errors={formik.errors.tax}
          />
        </div>
        <div>
          <Field
            name="discount"
            onChange={handlediscoundChange}
            onBlur={formik.handleBlur}
            value={formik.values.discount}
          />
          <ErrorMessage
            isTouched={formik.touched.discount}
            errors={formik.errors.discount}
          />
        </div>

        <Typography variant="h6" sx={{ m: 1 }}>
          Total : ${totalPriceAfterDiscountAndTax}
        </Typography>
        <Button variant="contained" sx={{ mx: 1 }} type="submit">
          checkout
        </Button>
        <Button variant="outlined" sx={{ mx: 1 }}>
          cancel
        </Button>
      </form>
    </>
  );
};

export default MyCart;
