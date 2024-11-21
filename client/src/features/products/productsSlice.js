import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
    product: {},
  },
  reducers: {
    setProducts: (state, action) => {
      console.log("inside", state, action.payload);
      state.products = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.products.value)`
export const selectProducts = (state) => state.products.products;

// Action creators are generated for each case reducer function
export const { setProducts, setProduct } = productsSlice.actions;

export default productsSlice.reducer;
