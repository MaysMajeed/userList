//import { style } from "./Navagation.module.css";
import "./Navagation.css";
import React from "react";
import { Link } from "react-router-dom";

function Navagation() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">LOGO</Link>
      </div>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </header>
  );
}

export default Navagation;
