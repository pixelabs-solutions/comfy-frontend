import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PostApis = createApi({
    reducerPath: 'PostApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://37.60.249.28:3000/' ,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            
            return headers;
          },
    }),
    endpoints: (builder) => ({
        // AddUser
        AddUser: builder.mutation({
            query: (User) => ({
                url: 'admin/AddUser',
                method: 'POST',
                body: User,
            }),
        }),
        LoginUser: builder.mutation({
            query: (LoginUser) => ({
                url: 'auth/login',
                method: 'POST',
                body: LoginUser,
            }),
        }),
        GenBill: builder.mutation({
            query: (userId) => ({
                url: 'users/BillingManager/GenBill',
                method: 'POST',
                body: userId, // Send userId directly
            }),
        }),
        refreshToken: builder.mutation({
            query: () => ({
              url: 'auth/refresh-token',
              method: 'POST',
            }),
          }),
          InitiateCall: builder.mutation({
            query: (InitiateCall) => ({
                url: 'calls/initiate',
                method: 'POST',
                body: InitiateCall,
            }),
        }),
        
}),
});

export const { useAddUserMutation  ,useLoginUserMutation ,useInitiateCallMutation , useRefreshTokenMutation, useGenBillMutation} = PostApis;
