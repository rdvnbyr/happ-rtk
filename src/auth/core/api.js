import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PROD_API_URL } from '../../lib/constants';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: PROD_API_URL,
  }),

  endpoints: (builder) => ({
    /**
     * Login endpoint
     * @param {object} body - {email, password}
     */
    login: builder.mutation({
      query: (body) => ({
        url: '/users/login',
        method: 'POST',
        body: body,
      }),
    }),

    /**
     * Logout endpoint
     * @param {string} token - access token
     */
    logout: builder.query({
      query: (token) => ({
        url: '/users/logout?access_token=' + token,
        method: 'POST',
      }),
    }),
  }),
});

// export actions
export const { useLoginMutation, useLogoutQuery } = authApi;
