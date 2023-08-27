import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchInfo: null
}
const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchInfoToStore: (state, action) => {
            console.log("coming here");
            state.searchInfo = action.payload
        }
    }
})

export const { setSearchInfoToStore } = searchSlice.actions
export default searchSlice.reducer