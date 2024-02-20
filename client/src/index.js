import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DarkModeSetter } from './components/DarkMode.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <DarkModeSetter>
      <App />
      <Footer />
    </DarkModeSetter>
  </React.StrictMode>
)
