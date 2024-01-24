import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Account from './pages/Account'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
