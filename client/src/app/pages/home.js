import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import("./style.css");


class Home extends Component {
  render() {
    return (
    <div className="home">
      <h1>welcome</h1>
      <Link to={'./addWalk'}>
        <button variant="raised">
            Add a walk
        </button>
      </Link>
      <Link to={'./walks'}>
        <button variant="raised">
            See walks
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;
