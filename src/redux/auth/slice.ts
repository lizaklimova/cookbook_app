import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
import { AuthState } from './initStateType';

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    });
  },
});

export const authReducer = authSlice.reducer;
