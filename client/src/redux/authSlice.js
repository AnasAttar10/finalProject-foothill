import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const EXTERNAL_API = `http://localhost:8000/user`;
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (newUser, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const res = await fetch(`${EXTERNAL_API}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      if (data.error) {
        return rejectWithValue(data);
      } else {
        localStorage.setItem("success", true);
        return data;
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (newUser, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      const res = await fetch(`${EXTERNAL_API}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        return rejectWithValue(data);
      } else {
        localStorage.setItem("token", JSON.stringify(data.token));
        localStorage.setItem("userInfo", JSON.stringify(data.cuser));
        return data;
      }
    } catch (error) {
      console.log("error in auth ");
      return rejectWithValue(error.message);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token")
      ? JSON.parse(localStorage.getItem("token"))
      : "",

    userName: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).userName
      : "",
    userImage: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).profilePicture
      : "",
    isAdmin: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo")).isAdmin
      : false,
    userId: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))._id
      : "",
    error: false,
    isLoading: false,
  },
  reducers: {
    logout: (state, action) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfo");
    },
  },
  extraReducers: {
    //signUp
    [signUp.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signUp.fulfilled]: (state, action) => {
      console.log(action);

      state.isLoading = false;
    },
    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.error = action.payload.error;
    },
    //signIn
    [signIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [signIn.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action);
    },
    [signIn.rejected]: (state, action) => {
      state.isLoading = false;
      console.log(action);
      state.error = action.payload.error;
    },
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
