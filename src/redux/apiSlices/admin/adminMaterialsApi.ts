import { api } from '../../api/baseApi';

const adminMaterialsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getMaterials: build.query({
            query: ({ page, limit, searchTerm }: { page: number; limit: number; searchTerm: string }) => ({
                url: `/learning?page=${page}&limit=${limit}&searchTerm=${searchTerm}`,
                method: 'GET',
            }),
        }),
        addMaterials: build.mutation({
            query: ({ data }: { data: any }) => ({
                url: '/learning',
                method: 'POST',
                body: data,
            }),
        }),
        updateMaterials: build.mutation({
            query: ({ data, id }: { data: any; id: string }) => ({
                url: `/learning/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
        deleteMaterials: build.mutation({
            query: ({ id }: { id: string }) => ({
                url: `/learning/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useGetMaterialsQuery,
    useAddMaterialsMutation,
    useUpdateMaterialsMutation,
    useDeleteMaterialsMutation,
} = adminMaterialsApi;
