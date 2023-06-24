import apiSlice from "../../api/apiSlice"

const userApi = apiSlice.injectEndpoints({
    endpoints: (build) => ({
        register: build.mutation({
            query: () => 'test',
        }),
    }),
    overrideExisting: false,
})

export const { useRegisterMutation } = userApi