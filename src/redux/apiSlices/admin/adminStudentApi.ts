import { api } from '../../api/baseApi';

const adminStudentApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllStudents: build.query({
            query: ({ page, searchTerm }: { page: number; searchTerm: string }) => ({
                url: `/student-admin`,
                method: 'GET',
                params: {
                    page,
                    limit: 10,
                    searchTerm,
                },
            }),
        }),
        updateStudent: build.mutation({
            query: ({ id, data }: { id: string; data: any }) => ({
                url: `/user/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        updateMentor: build.mutation({
            query: ({ id, data }: { id: string; data: any }) => ({
                url: `/user/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        getUserGroups: build.query({
            query: () => ({
                url: `/user-group`,
                method: 'GET',
            }),
        }),
        getUserTracks: build.query({
            query: () => ({
                url: `/user-group/tracks`,
                method: 'GET',
            }),
        }),
    }),
});

export const {
    useGetAllStudentsQuery,
    useUpdateStudentMutation,
    useUpdateMentorMutation,
    useGetUserGroupsQuery,
    useGetUserTracksQuery,
} = adminStudentApi;
