import apiSlice from "../../api/apiSlice"

const wishlistApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        addToWishlist: build.mutation({
            query: (data) => ({
                url: "/wishlist/add",
                method: "POST",
                body: data
            }),
            invalidatesTags: ['Wishlist', 'Property'],
        }),
        getWishlist: build.query({
            query: (id) => ({
                url: `/wishlist/${id}`
            }),
            providesTags: ['Wishlist'],
        }),

        getMyWishlist: build.query({
            query: (userId) => ({
                url: `/wishlist/userWishList/${userId}`
            })
        })

    })
})

export const { useAddToWishlistMutation, useGetMyWishlistQuery, useGetWishlistQuery } = wishlistApi
export default wishlistApi