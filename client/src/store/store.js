import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import userReducer from "../features/user/userSlice";
import cartReducer from "../features/cart/cartSlice";

export default configureStore({
  reducer: {
    products: productsReducer,
    product: productsReducer,
    users: userReducer,
    cart: cartReducer,
  },
});
