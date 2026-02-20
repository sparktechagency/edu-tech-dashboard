import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = localStorage.getItem('token');

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://10.10.7.72:8000/api/v1',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }),
    tagTypes: ['Facility', 'Package', 'Review', 'Profile'],
    endpoints: () => ({}),
});

export const imageUrl = 'http://10.10.7.72:8000';
