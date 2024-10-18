import { counterValue } from "@/@types";
import { createSlice } from "@reduxjs/toolkit";

const inisialState: counterValue = {
    count: 0
}

const counterSlice = createSlice({

    name: "counter",
    initialState: inisialState,
    reducers:{
        increment:(state) => {
            state.count += 1
        }
    }

})

export const {increment} = counterSlice.actions
export default counterSlice.reducer