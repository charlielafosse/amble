import React from "react";
import "./style.css";

// all those h1s should be components of some kind!

const Header = props => {
  return (
    <nav className="header">
      <a href="/">amble</a>
      <ul>
        <li>about</li>
        <li>walks</li>
        <li>login</li>
      </ul>
    </nav>
  );
};

export default Header;
