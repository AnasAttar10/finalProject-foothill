import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { logedInOut } from "./authSlice";
const EXTERNAL_API = `http://localhost:8000/category`;
export const retriveCategories = createAsyncThunk(
  "category/getCategoriess",
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
export const retriveCategory = createAsyncThunk(
  "category/retriveCategory",
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
export const insertNewCategory = createAsyncThunk(
  "category/insertCategory",
  async (newCategory, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // newBook.userName = getState().auth.userName;
    try {
      const res = await fetch(EXTERNAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      const success = await res.json();
      return success;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const updateCategory = createAsyncThunk(
  "category/udateCategory",
  async ({ id, newCategory }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // newBook.userName = getState().auth.userName;
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
      });
      const success = await res.json();
      return success;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const removeCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    targetCategory: "",
    isLoading: false,
    error: null,
  },
  extraReducers: {
    //Get Categories List
    [retriveCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload.categories;
    },
    [retriveCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // getCategory
    [retriveCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.targetCategory = action.payload.category;
    },
    [retriveCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Insert New Category
    [insertNewCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertNewCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories.push(action.payload.newCategory);
    },
    [insertNewCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // update Category
    [updateCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { id } = action.meta.arg;
      const targetIndex = state.categories.findIndex((c) => c._id === id);
      state.categories[targetIndex] = action.payload.updatedCategory;
    },
    [updateCategory.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Delete Category
    [removeCategory.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeCategory.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = state.categories.filter(
        (category) => category._id !== action.payload
      );
    },
    [removeCategory.rejected]: (state, action) => {
      state.isLoading = false;
    },
    // loged IN / Out
    // [logedInOut]: (state, action) => {
    //   console.log(action);
    // },
  },
});

export default categorySlice.reducer;
