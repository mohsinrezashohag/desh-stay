import apiSlice from "../../api/apiSlice"

const propertyApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        postProperty: build.mutation({
            query: (data) => ({
                url: '/property/list',
                method: "POST",
                body: data
            }),
        }),
        getAllProperty: build.query({
            query: () => ({
                url: '/property',
                method: 'GET'
            }),
            providesTags: ['Property']
        }),
        getPropertyDetails: build.query({
            query: (id) => ({
                url: `/property/${id}`,
                method: "GET"
            })
        })
    }),
    overrideExisting: false,
})

export const { usePostPropertyMutation, useGetAllPropertyQuery, useGetPropertyDetailsQuery } = propertyApi
export default propertyApi