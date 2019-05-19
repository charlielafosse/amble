import React, { Component } from 'react';
// import park from "../../assets/photos/park.png";
import { Button } from "../components/button";
import("./style.css");

class Home extends Component {
  render() {
    return (
    <div className="home">
      <h1>welcome</h1>
          <Button to="./addWalk" label="Add a walk" />
          <Button to="./walks" label="See walks" />
      <div className="imageDiv">
      {/*  <img src={park} alt="watercolour drawing of a park" /> */}
      </div>
    </div>
    );
  }
}
export default Home;
