import { api } from '../../api/baseApi';

const adminOverviewApi = api.injectEndpoints({
    endpoints: (build) => ({
        getOverview: build.query({
            query: () => ({
                url: `/admin/total-users-by-role`,
                method: 'GET',
            }),
        }),

        getRecentActivity: build.query({
            query: () => ({
                url: `/admin/recent-activities`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetOverviewQuery, useGetRecentActivityQuery } = adminOverviewApi;
