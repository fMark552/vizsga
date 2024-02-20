import { createContext, useEffect, useState } from 'react'

const DarkMode = createContext()

export const DarkModeSetter = ({ children }) => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saveDark = JSON.parse(localStorage.getItem('darkMode'))
    setDark(saveDark)
  }, [])

  const blackOrWhite = () => {
    const modeChange = !dark
    setDark(modeChange)
    localStorage.setItem('darkMode', JSON.stringify(modeChange))
  }
  return (
    <DarkMode.Provider value={{ dark, blackOrWhite }}>
      {children}
    </DarkMode.Provider>
  )
}

export default DarkMode
