import { Routes, Route } from 'react-router-dom'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='login' element={<>Login</>} />
                <Route path='reg' element={<>Reg</>} />
            </Routes>
        </>
    )
}

export default Auth