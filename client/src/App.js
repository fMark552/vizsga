import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import Registration from './pages/Registration'
import Update from './pages/Update'
import OtherAccount from './pages/OtherAccount'
import './App.css'
import Login from './pages/Login'
import { useContext } from 'react'
import { AuthContext } from './contexts/AuthCon'

function App() {
  const { actualUser } = useContext(AuthContext)

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/account" element={<Account />} />
          <Route path="/welcome" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/other" element={<OtherAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
