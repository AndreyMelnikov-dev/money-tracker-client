import SimpleButton from '../../UI/SimpleButton/SimpleButton'
import SimpleInput from '../../UI/SimpleInput/SimpleInput'
import { NavLink } from 'react-router-dom'
import { FC } from 'react'

const Registration: FC = () => {
    return (
        <form className='auth-form'>
            <SimpleInput title='Логин / E-mail' />
            <SimpleInput title='Пароль' />
            <SimpleInput title='Пароль' />
            <SimpleInput title='Пароль' />
            <SimpleInput title='Пароль' />
            <SimpleInput title='Пароль' />
            <div className='auth-bottom'>
                <SimpleButton>Регистрация</SimpleButton>
                <div className='auth-links'>
                    <NavLink to='/auth/login' className='auth-links__item'>Войти</NavLink>
                </div>
            </div>
        </form>
    )
}

export default Registration