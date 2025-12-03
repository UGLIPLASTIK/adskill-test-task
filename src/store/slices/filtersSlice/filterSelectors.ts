import type { RootState } from '../../store';

export const SortingFilter = (state: RootState) => state.filters.currentFilters;
