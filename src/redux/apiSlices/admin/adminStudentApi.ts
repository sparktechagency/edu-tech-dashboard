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
    }),
});

export const { useGetAllStudentsQuery, useUpdateStudentMutation, useUpdateMentorMutation } = adminStudentApi;
