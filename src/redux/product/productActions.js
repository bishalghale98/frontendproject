import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  deleteProduct,
  getById,
  getCategories,
  getElectronicsProducts,
  getProductList,
  getSmartphonesProducts,
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
  "product/electronics",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getElectronicsProducts(query ?? {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getSmartphonesList = createAsyncThunk(
  "product/smartphones",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getSmartphonesProducts(query ?? {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getCategoriesList = createAsyncThunk(
  "product/categories",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getRelatedProducts = createAsyncThunk(
  "product/related",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getProductList(query ?? {});

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const addNewProduct = createAsyncThunk(
  "product/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addProduct(data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const deleteProductById = createAsyncThunk(
  "product/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteProduct(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export {
  getAllProducts,
  getProductById,
  getElectronicsList,
  getSmartphonesList,
  getCategoriesList,
  getRelatedProducts,
  addNewProduct,
  deleteProductById,
};
