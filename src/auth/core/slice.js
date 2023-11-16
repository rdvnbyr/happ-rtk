import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './api';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  ping: 0,
};

// create slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    pingMethod: (state) => {
      state.ping = state.ping + 1;
    },

    decrementPingMethod: (state, action) => {
      state.ping = state.ping - action.payload;
    },
  },

  extraReducers: (builder) => {
    // login api matchers
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    });

    // logout api matchers
    builder.addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
      state.token = null;
      state.isAuthenticated = false;
    });
    builder.addMatcher(authApi.endpoints.logout.matchRejected, (state) => {
      state.token = null;
      state.isAuthenticated = false;
    });
  },
});

// export actions
export const { pingMethod, decrementPingMethod } = authSlice.actions;

export default authSlice.reducer;
