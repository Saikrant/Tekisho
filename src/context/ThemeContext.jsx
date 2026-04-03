// src/context/ThemeContext.jsx
import { createContext, useContext, useState } from 'react'

export const THEMES = {
  default: {
    id: 'default',
    label: 'Default',
    description: 'Light cards, gradient headline',
    dot: '#1B4FD8',
  },
  bold: {
    id: 'bold',
    label: 'Bold',
    description: 'Coloured card, contrast headline',
    dot: '#7C3AED',
  },
}

const ThemeContext = createContext({
  theme: 'default',
  setTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('default')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
