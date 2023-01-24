import './Accounts.scss'
import AccountItem from './AccountItem/AccountItem'
import SimpleButton from '../../UI/SimpleButton/SimpleButton'

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
            <SimpleButton className='accounts-page__add'>Новый счет</SimpleButton>
        </div>
    )
}

export default Accounts