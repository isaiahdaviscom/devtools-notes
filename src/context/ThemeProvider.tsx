import { createContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";


export default function ThemeProvider({ children }: any): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = (): void => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}
