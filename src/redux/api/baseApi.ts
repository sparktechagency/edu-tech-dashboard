import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://72.61.74.10:5000/api/v1',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');

            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }

            return headers;
        },
    }),
    tagTypes: [
        'Facility',
        'Package',
        'Review',
        'Profile',
        'Chat-Rooms',
        'Chat-Messages',
        'TimeTracks',
        'Class',
        'Resourse',
        'Assignment',
        'Submission',
    ],
    endpoints: () => ({}),
});

export const imageUrl = 'http://72.61.74.10:5000/uploads';
export const socketUrl = 'http://72.61.74.10:5000';
