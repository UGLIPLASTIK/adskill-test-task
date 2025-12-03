import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SortableKeys } from '@/types';

interface state {
  currentFilters: SortableKeys | null;
  progressive: boolean;
}

const initialState: state = {
  currentFilters: null,
  progressive: false,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    setfilter: (state, action: PayloadAction<SortableKeys>) => {
      state.currentFilters = action.payload;
    },
    setProgressive: (state) => {
      state.progressive = !state.progressive;
    },
  },
});

export const { setfilter, setProgressive } = filtersSlice.actions;

export default filtersSlice.reducer;
