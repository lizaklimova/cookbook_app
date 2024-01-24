import { RootState } from 'redux/store';

export const selectIsRegistered = (state: RootState) => state.auth.isRegistered;

export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

export const selectUser = (state: RootState) => state.auth.user;

export const selectIsRefreshing = (state: RootState) => state.auth.isRefreshing;

export const selectIsPageReloaded = (state: RootState) =>
  state.auth.isPageReloaded;
