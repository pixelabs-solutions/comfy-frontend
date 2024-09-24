  import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { method } from 'lodash';

  export const GetApis = createApi({
    reducerPath: 'GetApi',
    baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3001/',
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('authToken');
        if (token) {
          headers.set('Authorization', `Bearer ${token}`);
        }
        
        return headers;
      },
    }),
    endpoints: (builder) => ({
      ManageUser: builder.query({
        query: ({ roleManageUser }) => ({
          url: `/users/manageUsers?role=${roleManageUser}`,
          method: 'GET',
        }),
      }),
      AdminKpi: builder.query({
        query: (timeRange) => ({
          url: `admin/dashboard/kpis?timeRange=${timeRange}`,
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
        query: ({ role }) => ({
          url: `admin/pendingUsers?role=${role}`,
          method: 'GET',
        }),
      }),
      PaymentHistory: builder.query({
        query: ({ period }) => ({
          url: `admin/Payments?period=${period}`,
          method: 'GET',
        }),
      }),
      BillingHistory: builder.query({
        query: ({ filterDto }) => ({
          url: `billing/billHistory?filterDto=${filterDto}`,
          method: 'GET',
        }),
      }),
      // Sub admin APIs
      SubadminKpi: builder.query({
        query: ({ filterDto }) => ({
          url: `/admin/subAdmin/dashboard/kpis?timeRange=${filterDto}`,
          method: 'GET',
        }),
      }),
      ClientsBillHistory: builder.query({
        query: () => ({
          url: `users/Clients/BillHistory`,
          method: 'GET',
        }),
      }),
      ClientsCallHistory: builder.query({
        query: () => ({
          url: `users/Clients/CallHistory`,
          method: 'GET',
        }),
      }),
      ClientsCallHistory: builder.query({
        query: () => ({
          url: `users/Clients/CallHistory`,
          method: 'GET',
        }),
      }),
      BillingManagerDropdown: builder.query({
        query: ({Role}) => ({
          url: `users/getUsers?role=${Role}`,
          method: 'GET',
        }),
      }),
      BillingManager: builder.query({
        query: ({ userType, status }) => {
          let url = 'billing/billingManager/fetch/Bills';
          
          const params = new URLSearchParams();
          if (userType) {
            params.append('userType', userType);
          }
          if (status) {
            params.append('status', status);
          }
          
          if (params.toString()) {
            url += `?${params.toString()}`;
          }
          
          return {
            url,
            method: 'GET',
          };
        },
      }),
      
      
    }),
  });

  export const { 
    useManageUserQuery, 
    useClientsBillHistoryQuery,
    useSubadminKpiQuery, 
    useBillingManagerQuery,
    useBillingManagerDropdownQuery,
    useClientsCallHistoryQuery,
    usePaymentHistoryQuery,
    useBillingHistoryQuery,
    useAdminKpiQuery, 
    useCallHistoryQuery, 
    usePendingUsersQuery 
  } = GetApis;
