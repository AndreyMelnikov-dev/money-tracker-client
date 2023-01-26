import './Accounts.scss'
import AccountItem from './AccountItem/AccountItem'
import SimpleButton from '../../UI/SimpleButton/SimpleButton'
import IAccount from '../../../Models/IAccount'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'

const Accounts = () => {

    // delete on release
    const accountsListTest: IAccount[] = [
        {
            id: '1',
            title: 'Visa Card',
            value: 12000,
            currency: '$',
            description: 'smth about',
        },
        {
            id: '2',
            title: 'Mir Card',
            value: 120000,
            currency: '₽',
            description: 'О карте',
        },
        {
            id: '3',
            title: 'MasterCard',
            value: 100,
            currency: '$',
            description: 'Credit Card',
        },
    ]

    const dispatch = useDispatch()

    const accountState = useSelector((state: RootState) => state.account)

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