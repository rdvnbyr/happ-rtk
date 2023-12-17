import { createAsyncThunk } from '@reduxjs/toolkit';
import { PROD_API_URL } from '../../lib/constants';

export const loginAction = createAsyncThunk('auth/login', async (body, thunkAPI) => {
  try {
    const response = await fetch(`${PROD_API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logoutAction = createAsyncThunk('auth/logout', async (token, thunkAPI) => {
  try {
    if (!token) {
      const getToken = await thunkAPI.getState().auth.token; 
      token = getToken?.id;
    }
    const response = await fetch(`${PROD_API_URL}/users/logout?access_token=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
