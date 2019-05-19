import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { WalkForm } from "../components/walkForm";
// look up how withRouter works! and history too
class AddWalk extends Component {
  // Initialize the state
  state = {
    location: "",
    difficulty: "Stroll",
    redir: ""
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    fetch("/api/addWalk", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: data
    })
      .then(res => {
        console.log("woooo", res);
        // this.props.history.push("/walks");
        this.setState({ redir: "/walks" });
      })
      .catch(err => console.log("fetch error", err));
  };

  render() {
    if (this.state.redir) {
      return <Redirect to={this.state.redir} />
    }
    return (
      <div className="walkForm">
        <WalkForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default withRouter(AddWalk);
