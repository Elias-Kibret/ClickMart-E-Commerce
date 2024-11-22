import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload; // {id, name, price, quantity}
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
        existingItem.subtotal += newItem.price * newItem.quantity;
      } else {
        state.items.push({
          ...newItem,
          subtotal: newItem.price * newItem.quantity,
        });
      }
    },
    removeItem(state, action) {
      const id = action.payload; // ID of the item to remove
      state.items = state.items.filter((item) => item.id !== id);
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload; // {id, quantity}
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.subtotal = existingItem.price * quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

// Selectors
export const selectCart = (state) => state.cart.items;

// Exporting actions and reducer
export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
