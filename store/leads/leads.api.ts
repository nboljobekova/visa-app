import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Lead } from "../../model"

export const leadsApi = createApi({
  reducerPath: "appApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (build) => ({
    getLeads: build.query<Lead[], void>({
      query: () => ({
        url: `leads`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetLeadsQuery } = leadsApi;
