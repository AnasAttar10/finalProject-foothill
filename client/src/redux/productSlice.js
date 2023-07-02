import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const EXTERNAL_API = `http://localhost:8000/product`;
export const retriveProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;
    const headers = { Authorization: `anas__${token}` };
    try {
      const res = await fetch(EXTERNAL_API, { headers });
      const data = await res.json();
      if (data.error) {
        return rejectWithValue(data);
      } else {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const retriveProduct = createAsyncThunk(
  "product/retriveProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;
    const headers = { Authorization: `anas__${token}` };
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, { headers });
      const data = await res.json();
      if (data.error) {
        return rejectWithValue(data);
      } else {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const insertNewProduct = createAsyncThunk(
  "product/insertProduct",
  async (newProduct, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;

    try {
      const res = await fetch(EXTERNAL_API, {
        method: "POST",
        headers: {
          Authorization: `anas__${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      if (data.error) {
        return rejectWithValue(data);
      } else {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const updateProduct = createAsyncThunk(
  "product/updateProduct",
  async ({ id, updatedProduct }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;

    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `anas__${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });
      const data = await res.json();
      if (data.error) {
        return rejectWithValue(data);
      } else {
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const removeProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    const headers = { Authorization: `anas__${token}` };
    const token = getState().auth.token;

    try {
      const res = await fetch(EXTERNAL_API + "/" + id, {
        method: "DELETE",
        headers,
      });
      const data = await res.json();
      console.log("data");
      console.log(data);
      if (data.error) {
        return rejectWithValue(data);
      } else {
        return id;
      }
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
    error: "",
  },
  extraReducers: {
    //Get product List
    [retriveProducts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products;
    },
    [retriveProducts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    // get product
    [retriveProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.targetProduct = action.payload.product;
    },
    [retriveProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    // Insert New Product
    [insertNewProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertNewProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products.push(action.payload.newProduct);
    },
    [insertNewProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    },
    // update product
    [updateProduct.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { id } = action.meta.arg;
      const targetIndex = state.products.findIndex((c) => c._id === id);
      state.products[targetIndex] = action.payload.updatedProduct;
    },
    [updateProduct.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
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
      console.log(action);
      state.error = "couldn't delete this product";
    },
  },
});

export default productSlice.reducer;
