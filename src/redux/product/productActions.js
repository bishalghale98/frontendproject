import { createAsyncThunk } from "@reduxjs/toolkit";
import { getById, getProductList } from "../../api/product";

const getAllProducts = createAsyncThunk(
  "product/list",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProductList();
      return response.data; // Assuming your API returns user data on successful registration
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getProductById = createAsyncThunk(
  "product/id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getById(id);
      return response.data; // Assuming your API returns user data on successful registration
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getAllProducts, getProductById };
