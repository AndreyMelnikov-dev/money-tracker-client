import './Accounts.scss'
import AccountItem from './AccountItem/AccountItem'

const Accounts = () => {
    return (
        <div className='accounts-page'>
            <h1 className='f2 accounts-page__title'>Ваши счета</h1>
            <div className='accounts-page__list'>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
            </div>
        </div>
    )
}

export default Accounts