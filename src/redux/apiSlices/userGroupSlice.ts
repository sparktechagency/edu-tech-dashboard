import { api } from "../api/baseApi";

const userGroupSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUserGroups: builder.query({
            query: () => `/user-group`,
        })
    }),
});

export const { useGetAllUserGroupsQuery } = userGroupSlice;