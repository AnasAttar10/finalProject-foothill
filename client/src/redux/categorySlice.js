import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const EXTERNAL_API = `http://localhost:8000/category`;
export const retriveCategories = createAsyncThunk(
  "category/getCategoriess",
  async (_, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;
    const currentUser = getState().auth.userName;
    console.log(currentUser);
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
export const retriveCategory = createAsyncThunk(
  "category/retriveCategory",
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
export const insertNewCategory = createAsyncThunk(
  "category/insertCategory",
  async (newCategory, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;
    try {
      const res = await fetch(EXTERNAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `anas__${token}`,
        },
        body: JSON.stringify(newCategory),
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
export const updateCategory = createAsyncThunk(
  "category/udateCategory",
  async ({ id, newCategory }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, {
        method: "PUT",
        headers: {
          Authorization: `anas__${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCategory),
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
export const removeCategory = createAsyncThunk(
  "category/deleteCategory",
  async (id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    const token = getState().auth.token;
    const headers = { Authorization: `anas__${token}` };
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, {
        method: "DELETE",
        headers,
      });
      const data = await res.json();
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

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    targetCategory: "",
    isLoading: false,
    error: "",
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
      state.error = action.payload.error;
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
      state.error = action.payload.error;
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
      state.error = action.payload.error;
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
      state.error = action.payload.error;
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
      state.error = action.payload.error;
    },
  },
});

export default categorySlice.reducer;
