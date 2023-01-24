import IconBig from '../../IconBig/IconBig'
import './TransactionItem.scss'
import logo from '../../../../Static/logo.svg'
import IconSmall from '../../IconSmall/IconSmall'
import { NavLink } from 'react-router-dom'
import { FC } from 'react'

const TransactionItem: FC = () => {
    return (
        <div className='trans-item'>
            <NavLink to='/'>
                <IconBig>
                    <img src={logo} alt='title' />
                </IconBig>
            </NavLink>
            <div className='trans-item__info'>
                <NavLink to='/' className='f9'>Title of transaction</NavLink>
                <div className='trans-item__more'>
                    <NavLink to='/accounts/' className='trans-more'>
                        <IconSmall>
                            <img src={logo} alt='title' />
                        </IconSmall>
                        <div className='gray f8'>Visa Main Bank</div>
                    </NavLink>
                    <div className='trans-more'>
                        <IconSmall>
                            <img src={logo} alt='title' />
                        </IconSmall>
                        <div className='gray f8'>Comment of transaction</div>
                    </div>
                </div>
            </div>
            <div className='trans-item__price f9 income'>+  999 999 999 ₽</div>
        </div>
    )
}

export default TransactionItem