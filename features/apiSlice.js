import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),  // public ফোল্ডার থেকে fetch করবে
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products.json',  // public/products.json ফাইল থেকে data
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;
