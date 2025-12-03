import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

export const Offers = (state: RootState) => state.offers.offers;

export const Metrics = (state: RootState) => state.offers.currentMetrics;

export const SelectedOffers = (state: RootState) => state.offers.selectedOffers;

const filter = (state: RootState) => state.filters.currentFilters;

const progressive = (state: RootState) => state.filters.progressive;

export const FIlteredOffers = createSelector(
  [Offers, filter, progressive],
  (offers, filter, progressive) => {
    if (!filter) return offers;

    const sortedOffers = [...offers].sort((a, b) => {
      const aVal = a[filter];
      const bVal = b[filter];

      let comparison = 0;

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        comparison = aVal - bVal;
      } else if (typeof aVal === 'string' && typeof bVal === 'string') {
        comparison = aVal.localeCompare(bVal);
      }

      return progressive ? comparison : -comparison;
    });

    return sortedOffers;
  }
);
