import { api } from '../../api/baseApi';

const adminClassScheduleApi = api.injectEndpoints({
    endpoints: (build) => ({
        getClassSchedule: build.query({
            query: ({ page, limit, searchTerm }: { page: number; limit: number; searchTerm: string }) => ({
                url: `/class?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
                method: 'GET',
            }),
        }),
        addClassSchedule: build.mutation({
            query: ({ data }: { data: any }) => ({
                url: '/class',
                method: 'POST',
                body: data,
            }),
        }),
        updateClassSchedule: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `/class/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        deleteClassSchedule: build.mutation({
            query: ({ id }: { id: string }) => ({
                url: `/class/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetClassScheduleQuery,
    useAddClassScheduleMutation,
    useUpdateClassScheduleMutation,
    useDeleteClassScheduleMutation,
} = adminClassScheduleApi;
