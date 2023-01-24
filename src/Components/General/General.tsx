import { Routes, Route } from 'react-router-dom'
import Header from '../UI/Header/Header'
import Main from './Main/Main'

const General = () => {
    return (
        <>
            <Header />
            <main className='main'>
                <Routes>
                    <Route path='' element={<Main />} />
                </Routes>
            </main>

        </>
    )
}

export default General