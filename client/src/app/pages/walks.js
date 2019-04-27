import React, { Component } from "react";
import { Walk } from "../components/walk";
import("./style.css");
class Walks extends Component {
  state = {
    data: []
  };

  getWalkData() {
    fetch("/api/getWalkData")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data });
      })
      .catch(err => {
        throw new Error("fetch failed!");
      });
  }
  componentDidMount() {
    this.getWalkData();
  }

  render() {
    if (!this.state.data) {
      return <p> page loading... </p>;
    }
    const { data } = this.state;
    return (
      <div className="walks">
        {data.map(walk => (
          <Walk data={walk} />
        ))}
      </div>
    );
  }
}

export default Walks;
