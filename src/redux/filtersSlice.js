import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      state.name = payload.toString();
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectedNameFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
