import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

export const entityAdapter = createEntityAdapter();

const initialState = entityAdapter.getInitialState();

export const contactSelectors = entityAdapter.getSelectors(
  (state) => state.contacts
);

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: entityAdapter.addOne,
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
