import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

const initialContactsState = { items: [] };

const contactsSlice = createSlice({
  name: 'phone',
  initialState: initialContactsState,
  reducers: {
    addContact(state, {payload}) {
      state.items.push(payload);
    },
    removeContact(state, {payload}) {
      state.items = state.items.filter(item => item.id !== payload);
    },
  },
});


// Action creators are generated for each case reducer function
export const { addContact, removeContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// export default contactsSlice.reducer;
