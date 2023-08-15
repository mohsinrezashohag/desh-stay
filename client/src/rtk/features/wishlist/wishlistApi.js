import apiSlice from "../../api/apiSlice"

const wishlistApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({

        getMyWishlist: build.query({
            query: (userId) => ({
                url: `/wishlist/userWishList/${userId}`,
                method: "GET"
            })
        }),

        getAllWishlist: build.query({
            query: (userId) => ({
                url: `/wishlist`,
                method: "GET"
            }),
            providesTags: ["Wishlist"]
        }),

        addToWishlist: build.mutation({
            query: (data) => ({
                url: "/wishlist/add",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: addedWish } = await queryFulfilled
                    dispatch(apiSlice.util.updateQueryData('getAllWishlist', undefined, (draft) => {
                        draft?.data?.push(addedWish?.data)

                    }))
                }
                catch (error) {
                    console.log(error);
                }
            },
            invalidatesTags: ['Wishlist'],
        }),

        removeFromWishList: build.mutation({
            query: (id) => ({
                url: `/wishlist/removeWishlistProperty/${id}`,
                method: "DELETE"
            }),

        }),
        invalidatesTags: ['Wishlist'],





    })
})

export const { useGetAllWishlistQuery, useGetMyWishlistQuery, useAddToWishlistMutation, useRemoveFromWishListMutation } = wishlistApi
export default wishlistApi