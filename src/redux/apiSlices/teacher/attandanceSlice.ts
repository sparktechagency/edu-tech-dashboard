import { IGlobalResponseTypes } from "../../../types/teacher/home/global.types";
import { IUser } from "../../../types/teacher/home/student.typs";
import { api } from "../../api/baseApi";

const attandanceSlice = api.injectEndpoints({
    endpoints(build) {
        return {
            getStudentsOFTeacher : build.query<IGlobalResponseTypes<IUser[]>,any>({
                query: (params) => ({
                    url: '/teacher/my-students',
                    method: 'GET',
                    params
                })
            }),

            bulkAttandance : build.mutation({
                query: (data) => ({
                    url: '/student-attendance',
                    method: 'POST',
                    body: data
                })
            })
        }
    },
})


export const { useGetStudentsOFTeacherQuery, useBulkAttandanceMutation} = attandanceSlice
