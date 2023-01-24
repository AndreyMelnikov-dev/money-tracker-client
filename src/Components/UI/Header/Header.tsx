import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'
import logo from '../../../Static/logo.svg'
import burger from '../../../Static/burger.svg'

const Header = () => {
    return (
        <header className='header'>
            <NavLink to='/'>
                <img src={logo} alt='logotype' />
            </NavLink>
            <button className='header-burger'>
                <img src={burger} alt='burger' />
            </button>
        </header>
    )
}

export default Header