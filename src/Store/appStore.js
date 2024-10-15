import { configureStore } from '@reduxjs/toolkit'
import personReducer from "./personSlice";


const store = configureStore({
    reducer: {
        data: personReducer,

    }
})
export default store