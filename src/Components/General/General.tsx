import { Routes, Route } from 'react-router-dom'
import Header from '../UI/Header/Header'
import Main from './Main/Main'
import AccountEdit from './Accounts/AccountEdit/AccountEdit'
import AccountPage from './Accounts/AccountPage/AccountPage'
import Accounts from './Accounts/Accounts'
import Menu from '../UI/Menu/Menu'
import Transaction from './Transaction/Transaction'

const General = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/accounts/' element={<Accounts />} />
                    <Route path='/accounts/:id' element={<AccountPage />} />
                    <Route path='/accounts/new' element={<AccountEdit />} />
                    <Route path='/accounts/:id/edit' element={<AccountEdit />} />
                    <Route path='/transaction/:id' element={<Transaction />} />
                </Routes>
            </main>
            <Menu />

        </>
    )
}

export default General