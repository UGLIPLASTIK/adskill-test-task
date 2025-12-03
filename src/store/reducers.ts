import { combineReducers } from 'redux';
import offersSlice from './slices/offersSlice';
import filterSlice from './slices/filtersSlice';

const rootReducer = combineReducers({
  offers: offersSlice,
  filters: filterSlice,
});

export default rootReducer;
