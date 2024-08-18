import { createAsyncThunk } from "@reduxjs/toolkit";
import { login, signUp } from "../../api/auth";

// first parameter is name

const loginUser = createAsyncThunk(
  "user/loginUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);

      // const authToken = response.data.token;

      // localStorage.setItem("authToken", authToken); // Store authToken in localStorage

      return response.data; // Assuming your API returns user data on successful login
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const registerUser = createAsyncThunk(
  "user/registerUser",
  async (data, { rejectWithValue }) => {
    try {
      const response = await signUp(data);
      return response.data; // Assuming your API returns user data on successful registration
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { loginUser, registerUser };
