import apiSlice from "../../api/apiSlice"

const userApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation({
            query: (regInfo) => ({
                url: '/user/register',
                method: "POST",
                body: regInfo
            }),
        }),
        login: build.mutation({
            query: (loginInfo) => ({
                url: '/user/login',
                method: "POST",
                body: loginInfo
            }),
        }),
    }),
    overrideExisting: false,
})

export const { useRegisterMutation, useLoginMutation } = userApi
export default userApi