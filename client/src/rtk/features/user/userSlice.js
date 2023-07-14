import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userInfo: null,
    token: null
}
const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload.userInfo
            state.token = action.payload.token
        }
    }
})

export const { setUserInfo } = userSlice.actions
export default userSlice.reducer