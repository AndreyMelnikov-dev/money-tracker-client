import SimpleButton from '../../UI/SimpleButton/SimpleButton'
import SimpleInput from '../../UI/SimpleInput/SimpleInput'
import { NavLink } from 'react-router-dom'

const Login = () => {
    return (
        <form className='auth-form'>

            <SimpleInput title='Логин / E-mail' />
            <SimpleInput title='Пароль' />

            <div className='auth-bottom'>
                <SimpleButton>Войти</SimpleButton>
                <div className='auth-links'>
                    <NavLink to='/auth/reg' className='gray f9'>Регистрация</NavLink>
                    <NavLink to='/auth/recovery' className='gray f9'>Забыли пароль</NavLink>
                </div>
            </div>
            
        </form>
    )
}

export default Login