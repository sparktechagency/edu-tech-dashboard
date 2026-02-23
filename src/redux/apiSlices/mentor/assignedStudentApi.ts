import { api } from '../../api/baseApi';

const assignedStudentApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAssignedStudents: build.query<any, void>({
            query: () => ({
                url: '/mentor-dashboard/assigned-students',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAssignedStudentsQuery } = assignedStudentApi;
