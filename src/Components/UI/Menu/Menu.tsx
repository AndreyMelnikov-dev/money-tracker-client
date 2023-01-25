import { FC } from 'react'
import './Menu.scss'
import { NavLink } from 'react-router-dom'
import plus from '../../../Static/plus.svg'
import logo from '../../../Static/logo.svg'

const Menu: FC = () => {
    return (
        <>
            <div className='add-menu'>
                <NavLink to='' className='add-menu__link'>
                    <img src={logo} alt='icon' />
                    <span className='link-title'>Переводы</span>
                </NavLink>
                <NavLink to='' className='add-menu__link'>
                    <img src={logo} alt='icon' />
                    <span className='link-title'>Доходы</span>
                </NavLink>
                <NavLink to='' className='add-menu__link'>
                    <img src={logo} alt='icon' />
                    <span className='link-title'>Расходы</span>
                </NavLink>
            </div>
            <div className='main-menu'>
                <NavLink to='/accounts' className='main-menu__link'>
                    <div className='main-menu__icon'>1</div>
                    <div className='f8'>Счета</div>
                </NavLink>
                <NavLink to='/' className='main-menu__link'>
                    <div className='main-menu__icon'>2</div>
                    <div className='f8'>Копилки</div>
                </NavLink>
                <button className='main-menu__mainButton'>
                    <img src={plus} alt='main button' />
                </button>
                <NavLink to='/' className='main-menu__link'>
                    <div className='main-menu__icon'>3</div>
                    <div className='f8'>Аналитика</div>
                </NavLink>
                <NavLink to='/' className='main-menu__link'>
                    <div className='main-menu__icon'>4</div>
                    <div className='f8'>Главная</div>
                </NavLink>
            </div>
        </>
    )
}

export default Menu