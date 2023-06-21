import { Box, Button, Typography } from "@mui/material";
import CartItem from "../CartItem/CartItem";
import data from "../../data.json";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AddCart from "../AddCart/AddCart";
import Select from "../Select/Select";
// import AddIcon from "@mui/icons-material/Add";
import Field from "../Field/Field";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const productsFromJson = data.cartItems[0].products;
const { cartItems } = data;
// console.log(cartItems);
const MyCart = () => {
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(0);
  const [carts, setCarts] = useState(cartItems);
  const [currentCart, setCurrentCart] = useState("");
  const products = currentCart ? currentCart.products : [];
  // const [products, setProducts] = useState(currentProducts);
  // console.log("products");
  // console.log(currentProducts);
  const formik = useFormik({
    initialValues: {
      cartName: "",
    },
    validationSchema: Yup.object({
      cartName: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const cartsName = cartItems.map((c) => c.name);
  useEffect(() => {
    const SelectedValue = formik.values.cartName;
    const targetCart = carts.find((c) => c.name === SelectedValue);
    setCurrentCart(targetCart);
  }, [formik.values.cartName, carts]);

  console.log(products);

  const addCart = (newCart) => {
    const newCart1 = { name: newCart.value, products: [] };

    setCarts([...carts, newCart1]);
    newCart.value = "";
  };
  const removeProduct = (id) => {
    const oldProducts = [...currentCart.products]
    const newProducts = oldProducts.filter(p=>p.id !== id)
    setCurrentCart({...currentCart , products:newProducts})
    setCarts([...carts, currentCart.products.filter((p) => p.id !== id)]);
    // setProducts([...products].filter((p) => p.id !== id));
  };
  const increseQuantity = (id) => {
    // setProducts(
    //   [...products].map((p) => {
    //     if (p.id === id) {
    //       return { ...p, quantity: p.quantity + 1 };
    //     } else {
    //       return p;
    //     }
    //   })
    // );
  };
  const decreseQuantity = (id) => {
    // setProducts(
    //   [...products].map((p) => {
    //     if (p.id === id) {
    //       return { ...p, quantity: p.quantity - 1 };
    //     } else {
    //       return p;
    //     }
    //   })
    // );
  };
  const totalPrice = products.reduce(
    (sum, currentValue) => sum + currentValue.Price * currentValue.quantity,
    0
  );
  const totalPriceAfterTax = (totalPrice * tax) / 100 + totalPrice;
  const totalPriceAfterDiscountAndTax =
    totalPriceAfterTax - (totalPriceAfterTax * discount) / 100;
  return (
    <form onSubmit={formik.handleSubmit}>
      <AddCart addCart={addCart} />
      <Select
        name="cartName"
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        values={formik.values.cartName}
        options={cartsName}
      />
      <ErrorMessage
        isTouched={formik.touched.cartName}
        errors={formik.errors.cartName}
      />
      <Box
        component="nav"
        sx={{
          // width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          overflow: "auto",
          height: "200px",
        }}
        aria-label="mailbox folders"
      >
        {products.map((p) => (
          <CartItem
            key={p.id}
            product={p}
            increseQuantity={increseQuantity}
            decreseQuantity={decreseQuantity}
            removeProduct={removeProduct}
          />
        ))}
      </Box>
      <Typography variant="h6" sx={{ m: 1 }}>
        Tax(%)
        <input
          style={{ width: "50%" }}
          name="tax"
          type="number"
          value={tax}
          onChange={(e) => setTax(e.target.value)}
        />
      </Typography>
      <Typography variant="h6" sx={{ m: 1 }}>
        Discount (%){" "}
        <input
          type="number"
          style={{ width: "50%" }}
          name="discount"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
        />
      </Typography>
      <Typography variant="h6" sx={{ m: 1 }}>
        Total : ${totalPriceAfterDiscountAndTax}||0
      </Typography>
      <Button variant="contained" sx={{ mx: 1 }} type="submit">
        checkout
      </Button>
      <Button variant="outlined" sx={{ mx: 1 }}>
        cancel
      </Button>
    </form>
  );
};

export default MyCart;
