import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { logedInOut } from "./authSlice";
const EXTERNAL_API = `http://localhost:8000/product`;
export const retriveProducts = createAsyncThunk(
  "product/getProducts",
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
export const retriveProduct = createAsyncThunk(
  "product/retriveProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`);
      const data = await res.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const insertNewProduct = createAsyncThunk(
  "product/insertProduct",
  async (newProduct, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // newBook.userName = getState().auth.userName;
    try {
      const res = await fetch(EXTERNAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const success = await res.json();
      console.log(success);
      return success;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, updatedProduct }, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    console.log(id, updatedProduct);
    // newBook.userName = getState().auth.userName;
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const success = await res.json();
      return success;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const removeProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(EXTERNAL_API + "/" + id, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    targetProduct: "",
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //Get product List
    [retriveProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveProducts.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.products = action.payload.products;
    },
    [retriveProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // get product
    [retriveProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.targetProduct = action.payload.product;
    },
    [retriveProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Insert New Product
    [insertNewProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertNewProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      // console.log(action);
      state.products.push(action.payload.newProduct);
    },
    [insertNewProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // update product
    [updateProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      const { id } = action.meta.arg;
      const targetIndex = state.products.findIndex((c) => c._id === id);
      state.products[targetIndex] = action.payload.updatedProduct;
    },
    [updateProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Delete Product
    [removeProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = state.products.filter(
        (product) => product._id !== action.payload
      );
    },
    [removeProduct.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // loged IN / Out
    // [logedInOut]: (state, action) => {
    //   console.log(action);
    // },
  },
});

export default productSlice.reducer;
