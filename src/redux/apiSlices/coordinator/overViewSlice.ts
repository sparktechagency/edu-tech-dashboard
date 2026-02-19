import { api } from "../../api/baseApi";

const analatysSlice = api.injectEndpoints({
    endpoints: (build) => ({
        getOverView: build.query({
            query: () => {
                return {
                    url: "/coordinator/dashboard",
                    method: "GET",
                }
            },

        }),

        getAllMentors: build.query({
            query: () => {
                return {
                    url: "/coordinator/mentors",
                    method: "GET",
                }
            },

        }),

        getFiveStudents: build.query({
            query: () => {
                return {
                    url: "/coordinator/students/recent",
                    method: "GET",
                }
            },

        }),

        lastActivity: build.query({
            query: () => {
                return {
                    url: "/coordinator/resources/recent",
                    method: "GET",
                }
            },

        }),

    }),

});

export const {  
    useGetOverViewQuery, 
    useGetAllMentorsQuery, 
    useGetFiveStudentsQuery,
    useLastActivityQuery 
} = analatysSlice;