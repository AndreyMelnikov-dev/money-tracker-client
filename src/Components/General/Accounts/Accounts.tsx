import './Accounts.scss'
import AccountItem from './AccountItem/AccountItem'
import SimpleButton from '../../UI/SimpleButton/SimpleButton'
import IAccount from '../../../Models/IAccount'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../Redux/store'
import { useEffect } from 'react'
import { setAccountList, setLoading } from '../../../Redux/accountsSlice'
import Preloader from '../../UI/Preloader/Preloader'
import { NavLink } from 'react-router-dom'

const Accounts = () => {
    // delete on release
    const accountsListTest: IAccount[] = [
        {
            id: '1',
            title: 'Налик Дом',
            value: 1200000,
            currency: '$',
            description: 'smth about',
        },
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

    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(setAccountList(accountsListTest))
        setTimeout(() => {
            dispatch(setLoading(false))
        }, 1000)
    }, [])

    const accountState = useSelector((state: RootState) => state.account)
    const isLoading = accountState.isLoading
    const accountList = accountState.accountList.map(account => <AccountItem {...account} key={account.id} />)

    return (
        <div className='accounts-page'>
            <h1 className='f2 accounts-page__title'>Ваши счета</h1>
            <div className='accounts-page__list'>
                {isLoading ? <Preloader>Wait a second</Preloader> : accountList}
            </div>
            <NavLink to='./new'>
                <SimpleButton className='accounts-page__add'>Новый счет</SimpleButton>
            </NavLink>
        </div>
    )
}

export default Accounts