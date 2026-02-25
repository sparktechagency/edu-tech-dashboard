import { api } from '../../api/baseApi';

const adminMentorsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getAdminMentors: builder.query({
            query: ({ page, searchTerm }: { page: number; searchTerm: string }) => ({
                url: `/admin-mentor`,
                method: 'GET',
                params: {
                    page,
                    searchTerm,
                    limit: 10,
                },
            }),
        }),
        updateAdminMentor: builder.mutation({
            query: ({ id, data }: { id: string; data: any }) => ({
                url: `/admin-mentor/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        deleteAdminMentor: builder.mutation({
            query: (id: string) => ({
                url: `/admin-mentor/${id}`,
                method: 'DELETE',
            }),
        }),
        addMentor: builder.mutation({
            query: ({ data }: { data: any }) => ({
                url: '/admin/create-admin',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const {
    useGetAdminMentorsQuery,
    useUpdateAdminMentorMutation,
    useDeleteAdminMentorMutation,
    useAddMentorMutation,
} = adminMentorsApi;
