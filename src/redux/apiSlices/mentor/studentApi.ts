import { api } from '../../api/baseApi';

const studentApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getStudentProfile: builder.query({ query: (id: string) => `/student-admin/${id}` }),
    }),
});

export const { useGetStudentProfileQuery } = studentApi;
