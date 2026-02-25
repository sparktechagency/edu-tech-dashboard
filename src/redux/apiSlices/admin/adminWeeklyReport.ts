import { api } from '../../api/baseApi';

const adminWeeklyReportApi = api.injectEndpoints({
    endpoints: (build) => ({
        getWeeklyReport: build.query({
            query: ({ page, limit, searchTerm }: { page: number; limit: number; searchTerm: string }) => ({
                url: `/mentor/report?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetWeeklyReportQuery } = adminWeeklyReportApi;
