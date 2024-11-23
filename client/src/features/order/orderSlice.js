import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action) {
      console.log("action");
      // check if the state is updated.
      console.log(action);
      state.order = action.payload;
    },
    removeOrder(state, action) {
      state.order = {};
    },

    clearOrder(state) {
      state.order = {};
    },
  },
});

// Selectors
export const selectorder = (state) => state.order?.order;

// Exporting actions and reducer
export const { addOrder, removeOrder, clearOrder } = orderSlice.actions;
export default orderSlice.reducer;
