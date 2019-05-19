import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import leaves from "../../assets/photos/leaves.png";
import { Button } from "../components/button";
import("./style.css");
// <img src={leaves} alt="watercolour drawing of leaves" />


class Home extends Component {
  render() {
    return (
    <div className="home">
      <h1>welcome</h1>
          <Button to="./addWalk" label="Add a walk" />
          <Button to="./walks" label="See walks" />
    </div>
    );
  }
}
export default Home;
