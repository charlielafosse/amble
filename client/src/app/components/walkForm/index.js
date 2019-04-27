import React from "react";
import("./style.css");

export const WalkForm = ({ state, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <h1>Add a walk</h1>
    <label htmlFor="location-of-walk">Location</label>
    <input
      pattern="^[^<>]+$"
      name="location"
      type="text"
      id="location-of-walk"
      placeholder="Where did you walk?"
      required
      onChange={handleChange}
    />
    <br />
    <label htmlFor="difficulty">Difficulty</label>
    <select onChange={handleChange} name="difficulty" id="difficulty">
      <option value="Stroll">Stroll</option>
      <option value="Easy">Easy</option>
      <option value="Medium">Medium</option>
      <option value="Brisk">Brisk</option>
      <option value="Exhausting">Exhausting</option>
    </select>
    <br />
    <button type="submit">Submit</button>
  </form>
);
