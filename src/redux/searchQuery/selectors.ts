import { RootState } from 'redux/store';

export const selectSearchQuery = (state: RootState) =>
  state.searchQuery.searchQuery;
