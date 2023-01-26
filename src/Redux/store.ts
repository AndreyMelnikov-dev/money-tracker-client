import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import accountsSlice from './accountsSlice'
import accountPageSlice from './accountPageSlice'

export const store = configureStore({
    reducer: {
        user: userSlice,
        accounts: accountsSlice,
        accountPage: accountPageSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch