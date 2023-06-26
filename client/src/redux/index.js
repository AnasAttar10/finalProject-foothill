import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import bookReducer from "./bookSlice";
import authReducer from "./authSlice";
import categoryReducer from "./categorySlice";
import productReducer from "./productSlice";
export default configureStore({
  reducer: {
    book: bookReducer,
    auth: authReducer,
    cart: cartReducer,
    product: productReducer,
    category: categoryReducer,
  },
});
