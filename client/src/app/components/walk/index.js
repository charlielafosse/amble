import React from 'react';
import { Button } from "../../components/button";
import ("./style.css");

// functional component
export const Walk = ({ data, moreWalkInfo }) => (
    <div className="walk">
      <img alt="dummy pic" src="https://www.saga.co.uk/contentlibrary/saga/publishing/verticals/home-and-garden/gardening/advice-and-tips/produce/raspberry_leaves_turning_yellow_431563228_768.jpg" />
      <p>{data.location}</p>
      <p>{data.difficulty}</p>
      <Button to="./walkInfo" label="More Info" data={data} />
    </div>
  )
