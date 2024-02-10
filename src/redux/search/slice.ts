import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
  searchQuery: string;
  searchType: 'query' | 'ingredient';
}

const searchInitialState: SearchState = {
  searchQuery: '',
  searchType: 'query',
};

const searchSlice = createSlice({
  name: 'search',
  initialState: searchInitialState,
  reducers: {
    updateSearchQueryAction(state, action) {
      state.searchQuery = action.payload;
    },
    updateSearchTypeAction(state, action) {
      state.searchType = action.payload;
    },
  },
});

export const { updateSearchQueryAction, updateSearchTypeAction } =
  searchSlice.actions;
export const searchReducer = searchSlice.reducer;
