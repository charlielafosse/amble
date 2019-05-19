import React from 'react';
import { Link } from "react-router-dom";
import ("./style.css");

export const Button = ({ label, to }) => (
  <Link to={to}>{label}</Link>
)
