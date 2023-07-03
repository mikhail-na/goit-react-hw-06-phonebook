import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = '';

const filterSlice = createSlice({
  name: 'value',
  initialState: initialFilterState,
  reducers: {
    setFilterContacts(state, { payload }) {
       return  payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
// export default filterSlice.reducer;
