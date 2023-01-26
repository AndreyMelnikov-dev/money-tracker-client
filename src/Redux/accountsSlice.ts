import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IAccount from '../Models/IAccount'

interface IAccountState {
    isLoading: boolean
    accountList: IAccount[]
}

const initialState: IAccountState = {
    isLoading: true,
    accountList: []
}

// create thunk here

// account slice
const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        setLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload
        },
        setAccountList(state, action: PayloadAction<IAccount[]>) {
            state.accountList = [ ...action.payload ]
        }
    }
})


export const { setLoading, setAccountList } = accountSlice.actions
export default accountSlice.reducer