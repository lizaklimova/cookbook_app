import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { register, logIn, refreshUser, logOut } from './operations';
import { AuthState } from './initStateType';

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isRegistered: false,
  isLoggedIn: false,
  isRefreshing: false,
  isPageReloaded: false,
  isLoading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isRegistered = true;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, action: PayloadAction<any>) => {
        state.token = action.payload.token;
        state.user = action.payload;
        state.isLoading = false;
        state.isLoggedIn = true;
        state.isPageReloaded = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action: PayloadAction<any>) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.isPageReloaded = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
