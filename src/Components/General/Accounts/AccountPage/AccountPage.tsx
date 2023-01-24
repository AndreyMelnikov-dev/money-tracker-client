import { NavLink } from 'react-router-dom'
import IconBig from '../../../UI/IconBig/IconBig'
import TransactionsList from '../../../UI/TransactionsList/TransactionsList'
import './AccountPage.scss'

const AccountPage = () => {
    return (
        <div className='account-page'>
            <div className='account-page__top'>
                <IconBig>Ac</IconBig>
                <div className='account-page__title'>
                    <h2 className='f5'>Main Visa</h2>
                    <NavLink to='./edit' className='account-page__edit'>Edit</NavLink>
                </div>
                <div className='f10'>999 999 $</div>
            </div>
            <div className='account-page__total'>
                <div className='f6'>Итоги за месяц</div>
                <div className='account-total'>
                    <div className='account-total__item'>
                        <div className='title f9 income'>Доходы</div>
                        <div className='value f9'>999 999 ₽</div>
                    </div>
                    <div className='account-total__item'>
                        <div className='title f9 expense'>Расходы</div>
                        <div className='value f9'>999 999 ₽</div>
                    </div>
                </div>
            </div>
            <TransactionsList />
        </div>
    )
}

export default AccountPage