import { Routes, Route, NavLink } from 'react-router-dom'
import './Auth.scss'
import logo from '../../Static/logo.svg'
import Login from './Login/Login'
import Registration from './Registration/Registration'
import Recovery from './Recovery/Recovery'

const Auth = () => {
    return (
        <>
            <header className="auth-header">
                <NavLink to='/'>
                    <img src={logo} />
                </NavLink>
            </header>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='reg' element={<Registration />} />
                <Route path='recovery' element={<Recovery />} />
            </Routes>
        </>
    )
}

export default Auth