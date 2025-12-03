import type { RootState } from '../../store';

export const Offers = (state: RootState) => state.offers.offers;

export const Metrics = (state: RootState) => state.offers.currentMetrics;
