import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getById,
  getElectronicsProducts,
  getProductList,
} from "../../api/product";

const getAllProducts = createAsyncThunk(
  "product/list",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getProductList(query ?? {});

      return response.data;
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
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getElectronicsList = createAsyncThunk(
  "product/smartphones",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getElectronicsProducts(query ?? {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getAllProducts, getProductById, getElectronicsList };
