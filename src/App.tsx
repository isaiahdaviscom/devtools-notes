import { useEffect, useState, useContext } from "react";
import "./App.css";
// import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
// import Search from "./components/Search";

function App(): JSX.Element {
  
  return (
    <div className={"App"}>
        <Aside />
        <Main />
    </div>
  );
}

export default App;
