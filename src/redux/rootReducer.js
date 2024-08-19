import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import productReducer from "./product/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
});

export default rootReducer;
