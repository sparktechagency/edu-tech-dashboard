import { api } from '../../api/baseApi';

const weeklyReportsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getWeeklyReports: build.query({
            query: () => ({
                url: '/mentor/report',
                method: 'GET',
            }),
        }),
        addWeeklyReport: build.mutation({
            query: (data: any) => ({
                url: '/mentor/report',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useGetWeeklyReportsQuery, useAddWeeklyReportMutation } = weeklyReportsApi;
