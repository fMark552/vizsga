import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [actualUser, setActualUser] = useState(
    JSON.parse(localStorage.getItem('user')) || null
  )

  const Logger = async (input) => {
    const res = await axios.post('http://localhost:1997/login', input, {
      withCredentials: true,
    })
    setActualUser(res.data)
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(actualUser))
  }, [actualUser])

  return (
    <AuthContext.Provider value={{ actualUser, Logger }}>
      {children}
    </AuthContext.Provider>
  )
}
