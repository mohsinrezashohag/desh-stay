import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    property: null
}
export const propertySlice = createSlice({
    name: 'property',
    initialState: initialState,
    reducers: {
        setPropertyToStore: (state, action) => {
            state.property = action.payload
        }
    }

})

export const { setPropertyToStore } = propertySlice.actions
export default propertySlice.reducer