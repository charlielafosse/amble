import React from 'react';
import { Link } from "react-router-dom";
import ("./style.css");

export const Button = ({ label, to, data }) => (
  <Link className="myButton" to={{
        pathname: to,
        data,
    }}>{label}</Link>
)
