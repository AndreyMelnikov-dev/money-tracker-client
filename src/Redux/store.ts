import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import accountsSlice from './accountsSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        account: accountsSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch