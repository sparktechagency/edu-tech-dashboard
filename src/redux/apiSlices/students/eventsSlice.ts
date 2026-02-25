import { api } from "../../api/baseApi";


const eventResources = api.injectEndpoints({
    endpoints: (build) => ({
        getEventStudent: build.query({
            query: () => {
                return {
                    url: "/admin-event",
                    method: "GET",
                }
            },

        }),
        getEventStudentByID: build.query({
            query: ({id}:{id:string}) => {
                return {
                    url: `/admin-event/${id}`,
                    method: "GET",
                }
            },

        }),

    })
});


export const { 

    useGetEventStudentQuery,
    useGetEventStudentByIDQuery
    

} = eventResources;