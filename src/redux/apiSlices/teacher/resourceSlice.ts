import { IGlobalResponseTypes } from "../../../types/teacher/home/global.types";
import { IResourcesResponse } from "../../../types/teacher/home/matirials.type";
import { IUserGroup, IUserGroupTrack } from "../../../types/teacher/home/userGroup.types";
import { api } from "../../api/baseApi";

const resourceSlice = api.injectEndpoints({
    endpoints: (builder) => ({
        getResources: builder.query<IResourcesResponse,any>({
            query: (params) => {
                return {
                    url: "/learning",
                    method: "GET",
                    params
                };
            },
            providesTags: ["Resourse"],
        }),
        getUserGroups: builder.query<IGlobalResponseTypes<IUserGroup[]>,any>({
            query: (params) => {
                return {
                    url: "/user-group",
                    method: "GET",
                    params
                };
            },
        }),
        getUserGroupsTrack: builder.query<IGlobalResponseTypes<IUserGroupTrack[]>,any>({
            query: (params) => {
                return {
                    url: "/user-group/tracks",
                    method: "GET",
                    params
                };
            },
        }),
        createResourse: builder.mutation({
            query: (data) => {
                return {
                    url: "/learning",
                    method: "POST",
                    body: data,
                };
            },
            invalidatesTags: ["Resourse"],
        }),
        updateResourse: builder.mutation({
            query: ({ id, data }) => {
                return {
                    url: `/learning/${id}`,
                    method: "PATCH",
                    body: data,
                };
            },
            invalidatesTags: ["Resourse"],
        }),
        deleteResourse: builder.mutation({
            query: ({ id }) => {
                return {
                    url: `/learning/${id}`,
                    method: "DELETE",
                };
            },
            invalidatesTags: ["Resourse"],
        }),
    }),
})

export const { useGetResourcesQuery, useGetUserGroupsQuery, useCreateResourseMutation, useGetUserGroupsTrackQuery, useUpdateResourseMutation, useDeleteResourseMutation} = resourceSlice