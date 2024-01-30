import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import Welcome from './pages/Welcome'
import Registration from './pages/Registration'
import Update from './pages/Update'
import OtherAccount from './pages/OtherAccount'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/account" element={<Account />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/other" element={<OtherAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
