import IUser from '../IUser'

export default interface IAuthResponse {
    user: IUser,
    refreshToken: string,
    accessToken: string
}