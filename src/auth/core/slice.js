import { createSlice } from '@reduxjs/toolkit';
import { authApi } from './api';
import { loginAction } from './thunk';

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

    // SAGA CASES FOR LOGIN
    loginSagaDispatched: (state) => {
      state.isLoading = true;
    },
    loginSagaFulfilled: (state, action) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    loginSagaRejected: (state) => {
      state.isLoading = false;
    },
    
    // SAGA CASES FOR LOGOUT
    logoutSagaDispatched: (state) => {
      state.isLoading = true;
    },
    logoutSagaFulfilled: (state) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.user = null;
    },
    logoutSagaRejected: (state) => {
      state.isLoading = false;
    },
  },

  extraReducers: (builder) => {
    // LOGIN CASES FOR THUNK
    builder.addMatcher(loginAction.fulfilled, (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    });

    // login api matchers for RTK-QUERY
    builder.addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
      state.token = action.payload;
      state.isAuthenticated = true;
    });
    // logout api matchers for RTK-QUERY
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
export const {
  pingMethod,
  decrementPingMethod,
  loginSagaFulfilled,
  loginSagaDispatched,
  loginSagaRejected,
  logoutSagaDispatched,
  logoutSagaFulfilled,
  logoutSagaRejected,
} = authSlice.actions;

export default authSlice.reducer;
