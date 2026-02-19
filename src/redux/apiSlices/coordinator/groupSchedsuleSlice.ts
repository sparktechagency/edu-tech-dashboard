import { api } from "../../api/baseApi";

const groupScheduleSlice = api.injectEndpoints({
    endpoints: (build) => ({
        getClassesSchedule: build.query({
            query: () => {
                return {
                    url: "/coordinator/classes",
                    method: "GET",
                }
            },

        }),
        updateStatus: build.mutation({
            query: ({ id, status }) => {
                return {
                    url: `/coordinator/classes/${id}`,
                    method: "PATCH",
                    body: { status },
                }
            },
        }),
    }),
});

export const {  
    useGetClassesScheduleQuery, 
    useUpdateStatusMutation

} = groupScheduleSlice;