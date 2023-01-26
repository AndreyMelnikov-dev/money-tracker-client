import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import IAccount from '../Models/IAccount'
import ITransactionItem from '../Models/ITransactionItem'

interface IAccountPageState {
    isAccountLoading: boolean
    accountData: IAccount
    isTransactionsLoading: boolean
    transactionsList?: ITransactionItem[]
}

const initialState: IAccountPageState = {
    isAccountLoading: false,
    accountData: {} as IAccount,
    isTransactionsLoading: false,
    transactionsList: [] as ITransactionItem[]
}

const accountPageSlice = createSlice({
    name: 'accountPage',
    initialState,
    reducers: {
        setAccountData(state, action: PayloadAction<IAccount>) {
            state.accountData = { ...action.payload }
        },
        setTransactionsList(state, action: PayloadAction<ITransactionItem[]>) {
            state.transactionsList = { ...action.payload }
        },
        setAccountIsLoading(state, action: PayloadAction<boolean>) {
            state.isAccountLoading = action.payload
        },
        setTransactionsIsLoading(state, action: PayloadAction<boolean>) {
            state.isTransactionsLoading = action.payload
        }
    }
})

export const { setAccountData, setTransactionsList, setAccountIsLoading, setTransactionsIsLoading } = accountPageSlice.actions
export default accountPageSlice.reducer