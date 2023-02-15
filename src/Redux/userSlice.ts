import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import IAuthResponse from '../Models/response/IAuthResponse'
import IUser from '../Models/IUser'
import { Action } from '@remix-run/router'
import authApi from '../Api/auth-api'

interface IUserSliceState {
    user: IUser
    isAuth: boolean
    isLoading: boolean
}

const initialState: IUserSliceState = {
    user: {} as IUser,
    isAuth: false,
    isLoading: true,
}

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (loginData: { login: string, password: string }, { dispatch }) => {
        dispatch(setLoading(true))
        const response = await authApi.login(loginData.login, loginData.password)
        if (response.status == 200) {
            dispatch(setUser(response.data.user))
            dispatch(setIsAuth(true))
            localStorage.setItem('token', response.data.accessToken)
        }
        else {
            // реализовать валидацию логина
        }
        dispatch(setLoading(false))
    }
)

export const regUser = createAsyncThunk(
    'user/loginUser',
    async () => {

    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        },
        setUser: (state, action) => {
            state.user = { ...action.payload }
        }
    },
})

export const { setLoading, setIsAuth, setUser } = userSlice.actions

export default userSlice.reducer