import { api } from "../../api/baseApi";

interface GetResourcesParams {
  page?: number;
  limit?: number;
  searchTerm?: string;
  markAsAssigned?: boolean;
}

const resourcesDetails = api.injectEndpoints({
  endpoints: (build) => ({
    getResources: build.query<any, GetResourcesParams>({
      query: ({
        page = 1,
        limit = 10,
        searchTerm = "",
        markAsAssigned = true,
      }) => ({
        url: "/coordinator/resources",
        method: "GET",
        params: { page, limit, searchTerm, markAsAssigned },
      }),
    }),

    getResourceById: build.query<any, string>({
      query: (id) => ({
        url: `/coordinator/resources/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetResourcesQuery,
  useGetResourceByIdQuery,
} = resourcesDetails;