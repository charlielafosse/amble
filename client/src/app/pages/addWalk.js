import React, { Component } from "react";

class AddWalk extends Component {
  // Initialize the state
  state = {};

  render() {
    return (
      <div className="walkForm">
        <form action="/api/addWalk" method="POST">
          <h1>Add a walk</h1>
          <label htmlFor="location-of-walk">Location</label>
          <input
            pattern="^[^<>]+$"
            name="location"
            type="text"
            id="location-of-walk"
            placeholder="Where did you walk?"
            required
          />
          <br />
          <label htmlFor="difficulty">Difficulty</label>
          <select name="difficulty" id="difficulty">
            <option value="stroll">Stroll</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="brisk">Brisk</option>
            <option value="exhausting">Exhausting</option>
          </select>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddWalk;
