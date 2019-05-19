import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import("./style.css");

class WalkInfo extends Component {
  render () {
    // problem: on refresh or re-render, we lose the props below and so redirect back to walks...
    // might need to think about how we pass an id or similar into the url for better routing
    if(!this.props.location.data){
      return <Redirect to="/walks" />
    }
    return (
      <div className="walkInfo">
      <h1>{this.props.location.data.location}</h1>
      <p>Submitted by: </p>
      </div>
    )
  }
}

export default WalkInfo
