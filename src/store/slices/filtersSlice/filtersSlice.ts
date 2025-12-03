import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SortableKeys } from '@/types';

interface state {
  currentFilters: SortableKeys | null;
}

const initialState: state = {
  currentFilters: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setfilter: (state, action: PayloadAction<SortableKeys>) => {
      state.currentFilters = action.payload;
    },
  },
});

export const { setfilter } = filtersSlice.actions;

export default filtersSlice.reducer;
