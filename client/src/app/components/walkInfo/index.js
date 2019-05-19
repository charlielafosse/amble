import React from 'react';
import ("./style.css");

// functional component
export const WalkInfo = ({ data }) => (
    <div className="walkInfo">
      <h1> Walk in detail </h1>
      <p>location is {data.location}</p>
      <p>difficulty is {data.difficulty}</p>
    </div>
  )
