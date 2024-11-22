// src/features/cart/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 21,
      name: "Casual Sneakers",
      image:
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a3?$desktopProduct$",
      price: 39.99,
      quantity: 1,
      maxQuantity: 5, // Example maxQuantity from the database
      subtotal: 39.99,
      description: "Comfortable sneakers for daily wear and casual outings.",
    },
    {
      id: 22,
      name: "Casual Sneakers - White Edition",
      image:
        "https://coach.scene7.com/is/image/Coach/cy066_blk_a0?$desktopProduct$",
      price: 39.99,
      quantity: 2,
      maxQuantity: 5,
      subtotal: 79.98,
      description: "Comfortable sneakers for a stylish and classic look.",
    },
  ], // Array to hold cart items
  totalQuantity: 3, // Precomputed based on initial state
  totalPrice: 119.97, // Precomputed based on initial state
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
      state.totalQuantity += newItem.quantity;
      state.totalPrice += newItem.price * newItem.quantity;
    },

    removeItem(state, action) {
      const id = action.payload; // ID of the item to remove
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.subtotal;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    updateQuantity(state, action) {
      const { id, quantity } = action.payload; // {id, quantity}
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        const quantityDifference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.subtotal = existingItem.price * quantity;
        state.totalQuantity += quantityDifference;
        state.totalPrice += existingItem.price * quantityDifference;
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
