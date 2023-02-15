import axios, { Axios, AxiosResponse } from 'axios'
import IAuthResponse from '../Models/response/IAuthResponse';

const authInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
});

class AuthApi {
    async login(login: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        const authResponse = await authInstance.post<IAuthResponse>('login', {
            login,
            password
        })
        return authResponse
    }
}

export default new AuthApi()