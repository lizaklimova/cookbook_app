import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Credentials } from 'components/Registration/RegisterForm/registerFormType';
import { CredentialsLog } from 'components/Login/LoginForm/loginFormTypes';
import { toast } from 'react-hot-toast';
import { RootState } from 'redux/store';
axios.defaults.baseURL = 'https://so-yummy-back.onrender.com';

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = (): void => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: Credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/register', credentials);
      return res.data;
    } catch (error: any) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials: CredentialsLog, thunkAPI) => {
    try {
      const res = await axios.post('/api/login', credentials);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      toast.error(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/logout');
    clearAuthHeader();
  } catch (error: any) {
    toast.error(error.response.data.message);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState() as RootState;
    const persistedToken: string | null = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/current');
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
