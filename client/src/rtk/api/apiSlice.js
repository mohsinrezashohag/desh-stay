import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery(
        { baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/v1` }
    ),
    tagTypes: ['User', 'Property', 'Wishlist'],
    endpoints: () => ({}),
})
console.log("env :", import.meta.env.VITE_SERVER_URL);
export default apiSlice