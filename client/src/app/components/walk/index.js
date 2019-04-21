import React from 'react';
import ("./style.css");

export const Walk = ({ data }) => (
  <div className="walk">
    <p>location is {data.location}</p>
    <p>difficulty is {data.difficulty}</p>
  </div>
)
