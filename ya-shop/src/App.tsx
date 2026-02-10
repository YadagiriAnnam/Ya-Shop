import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from '@mui/icons-material'
import LoginPage from './Pages/login-page'
import HomePage from './Pages/home-page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<LoginPage></LoginPage>} />
    <Route path='/login' element={<LoginPage></LoginPage>} />
    <Route path='/home' element={<HomePage></HomePage>} />
    </Routes>
    </>
    
   
  )
}

export default App
