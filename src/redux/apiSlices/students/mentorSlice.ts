import { api } from "../../api/baseApi";


const mentorStudentResources = api.injectEndpoints({
    endpoints: (build) => ({
        getMentorProfile: build.query({
            query: (id) => {
                return {
                    url: `/coordinator/${id}`,
                    method: "GET",
                }
            },

        }),


    })
});


export const { 

    useGetMentorProfileQuery,
    // useUplloadAssignmentMutation

} = mentorStudentResources;