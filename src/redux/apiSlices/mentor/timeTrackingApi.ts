import { api } from '../../api/baseApi';

const timeTrackingApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getTimeTracking: builder.query({
            query: (id: string) => `/mentor/time-track/${id}`,
            providesTags: ['TimeTracks'],
        }),
        createTimeTracking: builder.mutation({
            query: (data: any) => ({
                url: '/mentor/time-track/',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['TimeTracks'],
        }),
        updateTimeTracking: builder.mutation({
            query: (data: any) => ({
                url: `/mentor/time-track/${data.id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['TimeTracks'],
        }),
    }),
});

export const { useGetTimeTrackingQuery, useCreateTimeTrackingMutation } = timeTrackingApi;
