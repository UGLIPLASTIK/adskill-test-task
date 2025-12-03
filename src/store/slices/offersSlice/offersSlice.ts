import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import data from '@/mock-data.json';

interface state {
  currentMetrics: typeof data.currentMetrics;
  offers: typeof data.offers;
  selectedOffers: string[];
}

type checkboxPayload = { id: string; selected: boolean };

const initialState: state = {
  currentMetrics: data.currentMetrics,
  offers: data.offers,
  selectedOffers: [],
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,

  reducers: {
    ToggleOfferSelected: (state, action: PayloadAction<checkboxPayload>) => {
      if (!action.payload.selected) {
        state.selectedOffers.push(action.payload.id);
      } else {
        state.selectedOffers = state.selectedOffers.filter(
          (item) => item !== action.payload.id
        );
      }
    },
    SelectAllOffers: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.selectedOffers = state.offers.map((offer) => offer.id);
      } else {
        state.selectedOffers = [];
      }
    },
  },
});

export const { ToggleOfferSelected, SelectAllOffers } = offersSlice.actions;

export default offersSlice.reducer;
