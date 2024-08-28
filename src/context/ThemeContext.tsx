import { createContext } from 'react';
// import { ThemeInterface } from '../interfaces/ThemeInterface';


export const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => { 
    console.log('hello')
  }
});