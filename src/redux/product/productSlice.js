import { createSlice } from "@reduxjs/toolkit";
import {
  addNewProduct,
  deleteProductById,
  getAllProducts,
  getCategoriesList,
  getElectronicsList,
  getProductById,
  getRelatedProducts,
  getSmartphonesList,
  updateProduct,
} from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: {},
    addProducts: false,
    relatedProducts: {
      loading: false,
      items: [],
    },
    categories: [],
    loading: false,
    error: null,
    query: null,
    currentPage: 1,
    totalPages: 1,
    delete: {
      loading: false,
      success: false,
    },
    edit: {
      loading: false,
      success: false,
    },
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

    resetAddProducts: (state) => {
      state.addProducts = false;
      state.error = null;
      state.loading = false;
    },
    resetEditProducts: (state) => {
      state.edit.success = false;
      state.error = null;
      state.edit.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.delete.success = false;
        state.edit.loading = false;
        state.edit.success = false;
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
      })
      .addCase(addNewProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.addProducts = action.payload;
        state.loading = false;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(deleteProductById.pending, (state) => {
        state.delete.loading = true;
        state.error = null;
      })
      .addCase(deleteProductById.fulfilled, (state) => {
        state.delete.success = true;
        state.delete.loading = false;
      })
      .addCase(deleteProductById.rejected, (state, action) => {
        state.error = action.payload;
        state.delete.loading = false;
      })
      .addCase(updateProduct.pending, (state) => {
        state.edit.loading = true;
        state.error = null;
        state.edit.success = false;
      })
      .addCase(updateProduct.fulfilled, (state) => {
        state.edit.success = true;
        state.edit.loading = false;
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.edit.loading = false;
      });
  },
});

export const {
  setLimit,
  setSort,
  setFilters,
  resetAddProducts,
  resetEditProducts,
} = productSlice.actions;

export default productSlice.reducer;
