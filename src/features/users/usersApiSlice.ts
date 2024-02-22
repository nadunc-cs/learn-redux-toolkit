import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
  id: string;
  name: string;
}

export const usersApiSlice = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
    prepareHeaders(headers) {
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchUsers: builder.query<User[], number | void>({
        query(limit = 10) {
          return `/users?limit=${limit}`;
        },
      }),
    };
  },
});

export const { useFetchUsersQuery } = usersApiSlice;
