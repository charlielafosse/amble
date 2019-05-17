import React, { Component } from "react";
import { Walk } from "../components/walk";
import("./style.css");
class Walks extends Component {
  state = {
    data: []
  };

  getWalkData = () => {
    fetch("/api/getWalkData")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({ data });
      })
      .catch(err => {
        throw new Error("fetch failed!");
      });
  };

  moreWalkInfo = (oneWalk) => {
    this.setState({ oneWalk });
  };

  componentDidMount = () => {
    this.getWalkData();
  };

  render() {
    if (!this.state.data) {
      return <p> page loading... </p>;
    }
    const { data } = this.state;
    // const { oneWalk } = this.state;
    if(!this.state.oneWalk){
      return (
        <div className="walks">
          {data.map(walk => (
            <Walk data={walk} moreWalkInfo={this.moreWalkInfo} />
          ))}
        </div>
      );
    } else {
      console.log("BOO", this.state.oneWalk);
      return (
        <div>
          <h1>here's a specific walk</h1>
          <p>{this.state.oneWalk.location}</p>
        </div>
      )
    }
  }
}

export default Walks;
