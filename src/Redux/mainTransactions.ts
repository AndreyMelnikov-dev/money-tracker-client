import { createSlice } from '@reduxjs/toolkit'
import ITransactionItem from '../Models/ITransactionItem'

interface IMainTransactionsState {
    isLoading: boolean
    transactionsList: ITransactionItem[]
}

const initialState: IMainTransactionsState = {
    isLoading: true,
    transactionsList: [] as ITransactionItem[]
}

const mainTransactions = createSlice({
    name: 'mainTransactions',
    initialState,
    reducers: {

    }
})