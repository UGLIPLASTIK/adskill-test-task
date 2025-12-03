import { createSlice } from '@reduxjs/toolkit';
import data from '@/mock-data.json';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import type { Tincture, Sector, SessionTin } from '@/types';

interface state {
  currentMetrics: typeof data.currentMetrics;
  offers: typeof data.offers;
}

const initialState: state = {
  currentMetrics: data.currentMetrics,
  offers: data.offers,
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,

  reducers: {
    // setList: (state, action: PayloadAction<Tincture[]>) => {
    //   state.allTinctures = action.payload;
    // },
    // setCurrentSector: (state, action: PayloadAction<Sector>) => {
    //   state.currentSector = action.payload;
    // },
    // addToSession: (state, action: PayloadAction<SessionTin>) => {
    //   state.sessionTins.push(action.payload);
    // },
    // clearSession: (state) => {
    //   localStorage.removeItem('sessionCollection');
    //   state.sessionTins = [];
    // },
  },
});

export const {} = offersSlice.actions;

export default offersSlice.reducer;
