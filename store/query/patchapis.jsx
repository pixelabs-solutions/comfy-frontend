import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an API slice
export const PatchApis = createApi({
  reducerPath: 'GetApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://37.60.249.28:3000/',  
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);  
      }
      return headers;  
    },
  }),
  endpoints: (builder) => ({
    UpdateInterpreter: builder.mutation({
      query: ({ id, data }) => ({
        url: `users/update/${id}`, 
        method: 'PATCH', 
        body: data, 
      }),
    }),
  }),
});

export const { 
  useUpdateInterpreterMutation,  
} = PatchApis;
