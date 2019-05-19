import React, { Component } from "react";
import { Redirect } from "react-router-dom"
import("./style.css");

class WalkInfo extends Component {
  render () {
    if(!this.props.location.data){
      return <Redirect to="/walks" />
    }
    return (
      <>
      <h1> Walk Info </h1>
      <p>location eees {this.props.location.data.location}</p>
      </>
    )
  }
}

export default WalkInfo
