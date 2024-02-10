import { RootState } from 'redux/store';

export const selectSearchQuery = (state: RootState) => state.search.searchQuery;

export const selectSearchType = (state: RootState) => state.search.searchType;
