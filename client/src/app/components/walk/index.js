import React from 'react';
import ("./style.css");

// functional component
export const Walk = ({ data, moreWalkInfo }) => (
    <div className="walk">
      <p>location is {data.location}</p>
      <p>difficulty is {data.difficulty}</p>
      <button onClick={() => {moreWalkInfo(data)}}>More info</button>
    </div>
  )
