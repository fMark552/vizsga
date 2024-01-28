import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Account from './pages/Account'
import '../src/css/App.css'
import Welcome from './pages/Welcome'
import LogIn from './pages/LogIn'
import Registration from './pages/Registration'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
