import { api } from "../../api/baseApi";


const resourcesStudents = api.injectEndpoints({
    endpoints: (build) => ({
        getStudentResources: build.query({
            query: () => {
                return {
                    url: "/learning?targeteAudience=STUDENT",
                    method: "GET",
                }
            },

        }),

    })
});


export const { 

    useGetStudentResourcesQuery 

} = resourcesStudents;