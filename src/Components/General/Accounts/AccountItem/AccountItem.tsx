import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import IAccount from '../../../../Models/IAccount'
import IconBig from '../../../UI/IconBig/IconBig'
import './AccountItem.scss'


const AccountItem: FC<IAccount> = (props) => {
    return (
        <NavLink to={`./${props.id}`} className='account-item'>
            <IconBig>
                {props.icon ? <img src={props.icon} alt={props.title} /> : props.title[0]}
            </IconBig>
            <div className='account-item__info'>
                <h2 className='f10'>{props.title}</h2>
                <div className='f8 gray'>{props.description}</div>
            </div>
            <div className='account-item__price f10'>{props.value.toLocaleString('ru')} {props.currency}</div>
        </NavLink>
    )
}

export default AccountItem