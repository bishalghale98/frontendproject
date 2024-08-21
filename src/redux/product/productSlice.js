import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getCategoriesList,
  getElectronicsList,
  getProductById,
  getSmartphonesList,
} from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    loading: false,
    error: null,
    query: null,
  },
  reducers: {
    setLimit: (state, action) => {
      state.query = { ...state.query, limit: action.payload };
    },
    setSort: (state, action) => {
      state.query = { ...state.query, sort: action.payload };
    },
    setFilters: (state, action) => {
      state.query = { ...state.query, filters: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.products = [action.payload];
        state.loading = false;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getElectronicsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getElectronicsList.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getElectronicsList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getSmartphonesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSmartphonesList.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
      })
      .addCase(getSmartphonesList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getCategoriesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(getCategoriesList.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { setLimit, setSort, setFilters } = productSlice.actions;

export default productSlice.reducer;
