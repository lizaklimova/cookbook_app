import { createSlice } from '@reduxjs/toolkit';

export interface SearchQueryState {
  searchQuery: string;
}

const searchQueryInitialState: SearchQueryState = {
  searchQuery: '',
};

const searchQuerySlice = createSlice({
  name: 'searchQuery',
  initialState: searchQueryInitialState,
  reducers: {
    updateSearchQueryAction(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { updateSearchQueryAction } = searchQuerySlice.actions;
export const searchQueryReducer = searchQuerySlice.reducer;
