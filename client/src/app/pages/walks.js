import React, { Component } from "react";
import { Walk } from "../components/walk";
import { Redirect } from "react-router-dom"
import("./style.css");
class Walks extends Component {
  state = {};

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
    this.setState({ oneWalk, redir: "/walkInfo" });
    // is this risky? Should use a Promise or similar in case we redir before updating oneWalk?
  };

  componentDidMount = () => {
    this.getWalkData();
  };

  render() {
    if (!this.state.data) {
      return <p> page loading... </p>;
    }
    const { data, redir, oneWalk } = this.state;
    if(!redir){
      return (
        <div className="walks">
          {data.map(walk => (
            <Walk data={walk} moreWalkInfo={this.moreWalkInfo} />
          ))}
        </div>
      );
    } else {
      return <Redirect to={{
            pathname: redir,
            data: oneWalk
        }}
/>
    }
  }
}

export default Walks;
