import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Auth from './Auth/Auth'
import General from './General/General'

const App = () => {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/*' element={<General />} />
      </Routes>
    </div>
  )
}

export default App
