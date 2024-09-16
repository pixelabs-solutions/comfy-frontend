import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const GetApis = createApi({
    reducerPath: 'GetApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
    endpoints: (builder) => ({
        GetAllUser: builder.query({
            query: () => ({
                url: 'admin/manageUser',
                method: 'GET',
            }),
        }),
        AdminKpi: builder.query({
            query: () => ({
                url: 'admin/dashboard/kpis',
                method: 'GET',
            }),
        }),
        callHistory: builder.query({
            query: ({ timeRange, date }) => ({
                url: `calls/callHistory?timeRange=${timeRange}&date=${date}`,
                method: 'GET',
            }),
        }),
        pendingUsers: builder.query({
            query: ({role}) => ({
                url: `admin/pendingUsers?role=${role}`,
                method: 'GET',
            }),
        }),
        
    }),
});

export const { useGetAllUserQuery, useAdminKpiQuery, useCallHistoryQuery , usePendingUsersQuery } = GetApis;
