import { createSlice } from "@reduxjs/toolkit";
const personSlice = createSlice({
    name: "data",
    initialState: { data: [] },
    reducers: {
        addperson(state, action) {
            state.data.push(action.payload)

        }
    }
})
export const { addperson } = personSlice.actions;
export default personSlice.reducer;

