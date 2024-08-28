import React, { Component } from "react";
import logo from "../../logo.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <>
      <img src={logo} className="logo" alt="logo" width={100} height={38} />
    </>
  );
}

export default Header;
