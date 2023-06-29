import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { logedInOut } from "./authSlice";
const EXTERNAL_API = `http://localhost:8000/cart`;
export const retriveCarts = createAsyncThunk(
  "cart/getCarts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(EXTERNAL_API);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const retriveCart = createAsyncThunk(
  "cart/retriveCart",
  async (cartId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${EXTERNAL_API}/${cartId}`);
      const result = await res.json();
      return result.cart[0].products;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const InsertNewCart = createAsyncThunk(
  "cart/insertCart",
  async (newCart, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // newBook.userName = getState().auth.userName;
    try {
      const res = await fetch(EXTERNAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCart),
      });
      const success = await res.json();
      console.log(success);
      return success;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const insertProductToCart = createAsyncThunk(
  "cart/insertProductToCart",
  async ({ cartId, productId }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const newProduct = getState().product.products.find(
      (p) => p._id === productId
    );
    try {
      const res = await fetch(
        `${EXTERNAL_API}/${cartId}/product/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await res.json();
      return data;
      // return newProduct;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const removeeProduct = createAsyncThunk(
  "cart/deleteproductfromcart",
  // async ({ cartId, id }, thunkAPI) => {
  async ({ cartId, productId }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `${EXTERNAL_API}/${cartId}/removeproduct/${productId}`,
        {
          method: "DELETE",
        }
      );
      return productId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const increseProductQuantity = createAsyncThunk(
  "cart/increseProductQuantity",
  async ({ cartId, productId, productQuantity }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `${EXTERNAL_API}/${cartId}/productquantity/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newQuantity: productQuantity }),
        }
      );
      return productId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const decreseProductQuantity = createAsyncThunk(
  "cart/decreseProductQuantity",
  async ({ cartId, productId, productQuantity }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `${EXTERNAL_API}/${cartId}/productquantity/${productId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ newQuantity: productQuantity }),
        }
      );
      return productId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
    // currentCart: "",
    products1: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //Get carts List
    [retriveCarts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveCarts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.carts = action.payload.carts;
    },
    [retriveCarts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //choose current cart and change the target products
    [retriveCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveCart.fulfilled]: (state, action) => {
      state.products1 = action.payload;
      console.log(action);
      state.currentCart = action.meta.arg;
      state.isLoading = false;
    },
    [retriveCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Insert New cart
    [InsertNewCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [InsertNewCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.carts.push(action.payload.newCart);
    },
    [InsertNewCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //insertProductToCart
    [insertProductToCart.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertProductToCart.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      // const targetProduct = state.products1.find(
      //   (p) => p._id === action.payload
      // );
      // state.products1.push({ product: action.payload, quantity: 1 });
      state.products1 = action.payload.insertedProduct.products;
    },
    [insertProductToCart.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //remove product from the cart
    [removeeProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeeProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products1 = state.products1.filter((p) => p._id !== action.payload);
    },
    [removeeProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //increse product quantity
    [increseProductQuantity.pending]: (state, action) => {
      state.isLoading = true;
    },
    [increseProductQuantity.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { cartId, productId, productQuantity } = action.meta.arg;
      state.products1.find((p) => p._id === productId).quantity =
        productQuantity;
    },
    [increseProductQuantity.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //decrese product quantity
    [decreseProductQuantity.pending]: (state, action) => {
      state.isLoading = true;
    },
    [decreseProductQuantity.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { cartId, productId, productQuantity } = action.meta.arg;
      state.products1.find((p) => p._id === productId).quantity =
        productQuantity;
    },
    [decreseProductQuantity.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    // Delete book
    // [deleteBook.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [deleteBook.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.books = state.books.filter((book) => book.id !== action.payload);
    // },
    // [deleteBook.rejected]: (state, action) => {
    //   state.isLoading = false;
    // },
    // // loged IN / Out
    // [logedInOut]: (state, action) => {
    //   console.log(action);
    // },
  },
});

export default cartSlice.reducer;
