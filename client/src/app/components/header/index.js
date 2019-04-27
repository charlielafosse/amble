import React from "react";
import "./style.css";

// all those h1s should be components of some kind!

const Header = props => {
  return (
    <nav className="header">
      <a href="/">amble</a>
      <ul>
        <li>
          <a href="/">about</a>
        </li>
        <li>
          <a href="/walks">walks</a>
        </li>
        <li>
          <a href="/">login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
