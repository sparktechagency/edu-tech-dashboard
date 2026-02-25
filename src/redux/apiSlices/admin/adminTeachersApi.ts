import { api } from '../../api/baseApi';

const adminTeachersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getTeachers: build.query({
            query: ({ page, limit, searchTerm }: { page: number; limit: number; searchTerm: string }) => ({
                url: `/admin-teacher?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
                method: 'GET',
            }),
        }),
        addTeacher: build.mutation({
            query: ({ data }: { data: any }) => ({
                url: '/admin/create-admin',
                method: 'POST',
                body: data,
            }),
        }),
        updateTeacher: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `/admin-teacher/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        deleteTeacher: build.mutation({
            query: ({ id }: { id: string }) => ({
                url: `/admin-teacher/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const { useGetTeachersQuery, useAddTeacherMutation, useUpdateTeacherMutation, useDeleteTeacherMutation } =
    adminTeachersApi;
