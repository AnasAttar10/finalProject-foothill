import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { logedInOut } from "./authSlice";
const EXTERNAL_API = `http://localhost:8000/category`;
export const retriveCategories = createAsyncThunk(
  "book/getCategoriess",
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
// export const InsertNewBook = createAsyncThunk(
//   "book/insertBook",
//   async (newBook, thunkAPI) => {
//     const { rejectWithValue, getState } = thunkAPI;
//     newBook.userName = getState().auth.userName;
//     try {
//       const res = await fetch(EXTERNAL_API, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newBook),
//       });
//       const success = await res.json();
//       return success;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
// export const deleteBook = createAsyncThunk(
//   "book/deleteBook",
//   async (id, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const res = await fetch(EXTERNAL_API + "/" + id, {
//         method: "DELETE",
//       });
//       return id;
//     } catch (err) {
//       return rejectWithValue(err.message);
//     }
//   }
// );
const categorySlice = createSlice({
  name: "product",
  initialState: { categories: [], isLoading: false, error: null },
  extraReducers: {
    //Get Book List
    [retriveCategories.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
    },
    [retriveCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //Insert New Book
    // [InsertNewBook.pending]: (state, action) => {
    //   state.isLoading = true;
    // },
    // [InsertNewBook.fulfilled]: (state, action) => {
    //   state.isLoading = false;
    //   state.books.push(action.payload);
    // },
    // [InsertNewBook.rejected]: (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
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
    // loged IN / Out
    // [logedInOut]: (state, action) => {
    //   console.log(action);
    // },
  },
});

export default categorySlice.reducer;
