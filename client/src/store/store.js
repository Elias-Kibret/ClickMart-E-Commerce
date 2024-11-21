import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    product: productsReducer,
    user: userReducer,
  }, 
});