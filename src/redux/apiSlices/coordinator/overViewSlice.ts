import { api } from "../../api/baseApi";

interface getMentorsParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
    status?: string;
}

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


        getAllMentors: build.query<any, getMentorsParams>({
        query: ({ page, limit = 10, searchTerm = "", status = "" }) => ({
            url: "/coordinator/mentors",
            method: "GET",
            params: { 
            page, 
            limit, 
            ...(searchTerm && { searchTerm }),
            ...(status && { status }),        
            },
        }),
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