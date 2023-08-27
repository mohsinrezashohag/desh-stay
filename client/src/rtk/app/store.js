import { configureStore } from '@reduxjs/toolkit'
import apiSlice from '../api/apiSlice'
import userSlice from '../features/user/userSlice'
import propertySlice from '../features/property/propertySlice'
import wishlistSlice from '../features/wishlist/wishlistSlice'
import searchSlice from '../features/search/searchSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        user: userSlice,
        property: propertySlice,
        wishlist: wishlistSlice,
        search: searchSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
})