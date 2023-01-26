import { NavLink } from 'react-router-dom'
import { FC, useEffect } from 'react'
import IconBig from '../../../UI/IconBig/IconBig'
import TransactionsList from '../../../UI/TransactionsList/TransactionsList'
import './AccountPage.scss'
import edit from '../../../../Static/edit.svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../../Redux/store'
import Preloader from '../../../UI/Preloader/Preloader'
import IAccount from '../../../../Models/IAccount'
import { setAccountData } from '../../../../Redux/accountPageSlice'

const AccountPage: FC = () => {

    const dispatch = useDispatch()
    // delete on release
    const accountDataTest: IAccount = {
        id: '123',
        title: 'Visa Visa',
        value: 12000,
        currency: '$',
        description: 'about',
    }

    const accountPageState = useSelector((state: RootState) => state.accountPage)
    const accountData = accountPageState.accountData

    useEffect(() => {
        dispatch(setAccountData(accountDataTest))
    }, [])

    return (
        <div className='account-page'>
            {accountPageState.isAccountLoading ? <Preloader>Загружаем счет</Preloader>
                : (
                    <div className='account-page__top'>
                        <IconBig>
                            {accountData.icon
                                ? <img src={accountData.icon} alt={accountData.title} />
                                : accountData?.title?.toString()[0]}
                        </IconBig>
                        <div className='account-page__title'>
                            <h2 className='f5'>{accountData.title}</h2>
                            <NavLink to='./edit' className='account-page__edit'>
                                <img src={edit} />
                            </NavLink>
                        </div>
                        <div className='f10'>{accountData?.value?.toLocaleString('ru')} {accountData.currency}</div>
                    </div>
                )}
            {accountPageState.isTransactionsLoading ? <Preloader>Загружаем транзакции</Preloader>
                : (<>
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
                </>)
            }

        </div>
    )
}

export default AccountPage