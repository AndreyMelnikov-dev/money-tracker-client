import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {

}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
})

// Action creators are generated for each case reducer funtion
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default userSlice.reducer