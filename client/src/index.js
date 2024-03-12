import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './components/Footer'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthContextProvider } from './contexts/AuthCon'
import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
      <Footer />
    </AuthContextProvider>
  </React.StrictMode>
)
