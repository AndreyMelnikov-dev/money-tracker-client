import { Routes, Route } from 'react-router-dom'

const General = () => {
    return (
        <Routes>
            <Route path='/test' element={<>Test</>} />
        </Routes>
    )
}

export default General