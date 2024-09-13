import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const PostApis = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        // AddUser
        AddUser: builder.mutation({
            query: (User) => ({
                url: '/admin/AddUser',
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
    }),
});

export const { useAddUserMutation  ,useLoginUserMutation} = PostApis;
