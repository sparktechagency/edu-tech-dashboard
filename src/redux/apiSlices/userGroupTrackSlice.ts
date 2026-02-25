import { api } from "../api/baseApi";

const userGroupTrackSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getAllUserGroupTracks: builder.query({
            query: () => `/user-group/tracks`,
        })
    }),
});

export const { useGetAllUserGroupTracksQuery } = userGroupTrackSlice;