import React from 'react'
import IconBig from '../../IconBig/IconBig'
import './TransactionItem.scss'
import logo from '../../../../Static/logo.svg'
import IconSmall from '../../IconSmall/IconSmall'
import { NavLink } from 'react-router-dom'

const TransactionItem = () => {
    return (
        <NavLink to='/' className='trans-item'>
            <IconBig>
                <img src={logo} alt='title' />
            </IconBig>
            <div className='trans-item__info'>
                <div className='trans-item__title'>Title of transaction</div>
                <div className='trans-item__more'>
                    <div className='trans-more'>
                        <IconSmall>
                            <img src={logo} alt='title' />
                        </IconSmall>
                        <div className='trans-more__title'>Visa Main Bank</div>
                    </div>
                    <div className='trans-more'>
                        <IconSmall>
                            <img src={logo} alt='title' />
                        </IconSmall>
                        <div className='trans-more__title'>Comment of transaction</div>
                    </div>
                </div>
            </div>
            <div className='trans-item__price income'>+  999 999 999 ₽</div>
        </NavLink>
    )
}

export default TransactionItem