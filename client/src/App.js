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
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import Layout from './components/Layout'

function App() {
  const { actualUser } = useContext(AuthContext)

  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/update/:id" element={<Update />} />
              <Route path="/account" element={<Account />} />
              <Route path="/welcome" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/other" element={<OtherAccount />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}

export default App
