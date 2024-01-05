import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, { payload }) => {
      // console.log(state);
      return payload;
    },
  },
});

export const { filterContact } = filterSlice.actions;