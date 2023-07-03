import { createSlice } from '@reduxjs/toolkit';
// import { nanoid } from '@reduxjs/toolkit';

// const initialContactsState = { items: [] };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, { payload }) {
         state = [...state, payload];
      },
    }
  },
  removeContacts: (state, { payload }) => {
    state = state.filter(state => state.id !== payload);
  },
});

// Action creators are generated for each case reducer function
export const { addContact, removeContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
export const contactsReducer = contactsSlice.reducer;
