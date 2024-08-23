import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  getCategoriesList,
  getElectronicsList,
  getProductById,
  getRelatedProducts,
  getSmartphonesList,
} from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: [],
    relatedProducts: {
      loading: false,
      items: [],
    },
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
        state.product = [action.payload];
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
      })
      .addCase(getRelatedProducts.pending, (state) => {
        state.relatedProducts.loading = true;
        state.error = null;
      })
      .addCase(getRelatedProducts.fulfilled, (state, action) => {
        state.relatedProducts.items = action.payload;
        state.relatedProducts.loading = false;
      })
      .addCase(getRelatedProducts.rejected, (state, action) => {
        state.error = action.payload.error;
        state.relatedProducts.loading = false;
      });
  },
});

export const { setLimit, setSort, setFilters } = productSlice.actions;

export default productSlice.reducer;
