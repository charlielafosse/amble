import React, { Component } from "react";
import { Walk } from "../components/walk";
import { WalkInfo } from "../components/walkInfo";
import("./style.css");
class Walks extends Component {
  state = {
    data: []
  };

  getWalkData = () => {
    fetch("/api/getWalkData")
      .then(res => res.json())
      .then(data => {
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
    const { oneWalk } = this.state;
    if(!oneWalk){
      return (
        <div className="walks">
          {data.map(walk => (
            <Walk data={walk} moreWalkInfo={this.moreWalkInfo} />
          ))}
        </div>
      );
    } else {
      return (
        <WalkInfo data={oneWalk} />
      )
    }
  }
}

export default Walks;
