import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// look up how withRouter works! and history too
class AddWalk extends Component {
  // Initialize the state
  state = {
    location: "",
    difficulty: "Stroll"
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
        this.props.history.push("/walks");
      })
      .catch(err => console.log("fetch error", err));
  };

  render() {
    return (
      <div className="walkForm">
        <form>
          <h1>Add a walk</h1>
          <label htmlFor="location-of-walk">Location</label>
          <input
            pattern="^[^<>]+$"
            name="location"
            type="text"
            id="location-of-walk"
            placeholder="Where did you walk?"
            required
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="difficulty">Difficulty</label>
          <select
            onChange={this.handleChange}
            name="difficulty"
            id="difficulty"
          >
            <option value="Stroll">Stroll</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Brisk">Brisk</option>
            <option value="Exhausting">Exhausting</option>
          </select>
          <br />
          <button onClick={this.handleSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(AddWalk);
