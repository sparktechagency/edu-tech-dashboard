import { api } from '../../api/baseApi';

const adminEventsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getEvents: build.query({
            query: ({ page, limit, searchTerm }: { page: number; limit: number; searchTerm: string }) => ({
                url: `/admin-event?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
                method: 'GET',
            }),
        }),
        addEvents: build.mutation({
            query: ( data: any ) => { 
                return {
                    url: '/admin-event',
                    method: 'POST',
                    body: data,
                }
            },
        }),
        updateEvents: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `/admin-event/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        deleteEvents: build.mutation({
            query: ({ id }: { id: string }) => ({
                url: `/admin-event/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetEventsQuery,
    useAddEventsMutation,
    useUpdateEventsMutation,
    useDeleteEventsMutation,
} = adminEventsApi;
