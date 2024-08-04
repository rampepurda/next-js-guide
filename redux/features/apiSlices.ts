import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<any, string>({
      query: (name) => '/products',
    }),
  }),
})
export const { useGetAllProductsQuery } = productsApi
