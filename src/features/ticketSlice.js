import { createSlice } from "@reduxjs/toolkit";

export const ticketSlice = createSlice({
  name: "ticket",
  initialState: [],
  reducers: {
    addTicket: (state, action) => {
      const ticket = {
        // id: action.payload.id,
        // text: action.payload,
        data: action.payload,
      };
      console.log(action.payload)

      state.push(ticket);
    },
  },
});

// this is for dispatch
export const { addTicket } = ticketSlice.actions;

// this is for configureStore
export default ticketSlice.reducer;
