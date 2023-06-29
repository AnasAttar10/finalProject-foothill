import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { logedInOut } from "./authSlice";
const EXTERNAL_API = `http://localhost:8000/unit`;
export const retriveUnits = createAsyncThunk(
  "unit/getUnits",
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
export const retriveUnit = createAsyncThunk(
  "unit/getUnit",
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
export const insertNewUnit = createAsyncThunk(
  "unit/insertUnit",
  async (newUnit, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // newBook.userName = getState().auth.userName;
    try {
      const res = await fetch(EXTERNAL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUnit),
      });
      const success = await res.json();
      return success;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const updateUnit = createAsyncThunk(
  "unit/updateUnit",
  async ({ id, newUnit }, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    // newBook.userName = getState().auth.userName;
    try {
      const res = await fetch(`${EXTERNAL_API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUnit),
      });
      const success = await res.json();
      return success;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const removeUnit = createAsyncThunk(
  "unit/deleteUnit",
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

const unitSlice = createSlice({
  name: "unit",
  initialState: { units: [], targetUnit: "", isLoading: false, error: null },
  extraReducers: {
    //Get unit List
    [retriveUnits.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveUnits.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.units = action.payload.units;
    },
    [retriveUnits.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //get unit
    [retriveUnit.pending]: (state, action) => {
      state.isLoading = true;
    },
    [retriveUnit.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.targetUnit = action.payload.unit;
    },
    [retriveUnit.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Insert New Unit
    [insertNewUnit.pending]: (state, action) => {
      state.isLoading = true;
    },
    [insertNewUnit.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.units.push(action.payload.newUnit);
    },
    [insertNewUnit.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //updateUnit
    [updateUnit.pending]: (state, action) => {
      state.isLoading = true;
    },
    [updateUnit.fulfilled]: (state, action) => {
      state.isLoading = false;
      const { id } = action.meta.arg;
      const targetIndex = state.units.findIndex((c) => c._id === id);
      state.units[targetIndex] = action.payload.updatedUnit;
    },
    [updateUnit.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //delete unit
    [removeUnit.pending]: (state, action) => {
      state.isLoading = true;
    },
    [removeUnit.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.units = state.units.filter((unit) => unit._id !== action.payload);
    },
    [removeUnit.rejected]: (state, action) => {
      state.isLoading = false;
    },
  },
});

export default unitSlice.reducer;
