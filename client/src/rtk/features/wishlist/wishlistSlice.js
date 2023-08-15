import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    property: [{ name: "hello" }]
}
const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {
        setWishlistToStore: (state, action) => {
            console.log(action.payload);
            state.property.push(action.payload)
        }
    }
})

export const { setWishlistToStore } = wishlistSlice.actions
export default wishlistSlice.reducer

