import { useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Card from "../Card";

export default function Main() {

  const [ isDarkMode, toggleTheme] = useState(ThemeContext)

  const toggleThemeSwitch = (e: React.MouseEvent<HTMLButtonElement>) => { 
    console.log(isDarkMode)
  }

  return (
    <main id="main-content">
      <button onClick={toggleThemeSwitch}>Theme Switcher</button>
      <Card orientation="landscape" charLimit={100}></Card>
      <div className="cards"></div>
    </main>
  );
}
