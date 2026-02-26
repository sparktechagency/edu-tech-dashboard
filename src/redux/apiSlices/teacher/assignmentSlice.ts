import { IAssignment, ISubmittedAssignmentResponse } from '../../../types/teacher/home/assignment.types';
import { IGlobalResponseTypes } from '../../../types/teacher/home/global.types';
import { api } from '../../api/baseApi';

const assignementSlice = api.injectEndpoints({
    endpoints: (build) => ({
        getAssignment: build.query<IGlobalResponseTypes<IAssignment[]>, any>({
            query: (params) => ({
                url: '/assignment',
                method: 'GET',
                params,
            }),
            providesTags: ['Assignment'],
        }),
        createAssignment: build.mutation({
            query: (data) => ({
                url: '/assignment',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Assignment'],
        }),
        updateAssignment: build.mutation({
            query: ({ id, data }) => ({
                url: `/assignment/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Assignment'],
        }),
        deleteAssignment: build.mutation({
            query: ({ id }) => ({
                url: `/assignment/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Assignment'],
        }),
        getAllSubmissionOfAssignment: build.query<ISubmittedAssignmentResponse, any>({
            query: (params) => ({
                url: '/teacher/all-submitted-assignments',
                method: 'GET',
                params,
            }),
            providesTags: ['Submission'],
        }),
        giveMarksOfSubmission: build.mutation({
            query: ({ id, data }) => ({
                url: `/assignment/marks/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Submission'],
        }),
    }),
});

export const {
    useGetAssignmentQuery,
    useCreateAssignmentMutation,
    useUpdateAssignmentMutation,
    useDeleteAssignmentMutation,
    useGetAllSubmissionOfAssignmentQuery,
    useGiveMarksOfSubmissionMutation,
} = assignementSlice;
