import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
    <div className="App">
      <h1>Project Home</h1>
      {/* Link to List.js */}
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
