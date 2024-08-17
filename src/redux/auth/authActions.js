import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

// first parameter is name

const loginUser = createAsyncThunk(
  `auth/login`,
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { loginUser };
