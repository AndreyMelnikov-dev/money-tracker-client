import { NavLink } from 'react-router-dom'
import IconBig from '../../../UI/IconBig/IconBig'
import './AccountItem.scss'

const AccountItem = () => {
    return (
        <NavLink to='' className='account-item'>
            <IconBig>
                Hui
            </IconBig>
            <div className='account-item__info'>
                <h2 className='f10'>Title of transaction</h2>
                <div className='f8 gray'>Dollar $</div>
            </div>
            <div className='account-item__price f10'>14 000 $</div>
        </NavLink>
    )
}

export default AccountItem