import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Credentials } from 'components/Registration/RegisterForm/registerFormType';
axios.defaults.baseURL = 'https://so-yummy-back.onrender.com';

const setAuthHeader = (token: string): void => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = (): void => {
//   axios.defaults.headers.common.Authorization = '';
// };

export const register = createAsyncThunk(
  'auth/register',
  async (credentials: Credentials, thunkAPI) => {
    try {
      const res = await axios.post('/api/register', credentials);
      console.log(res);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
