import { Routes, Route } from 'react-router-dom'
import Header from '../UI/Header/Header'
import Accounts from './Accounts/Accounts'
import Main from './Main/Main'

const General = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path='' element={<Main />} />
                    <Route path='/accounts' element={<Accounts />} />
                </Routes>
            </main>

        </>
    )
}

export default General