// import { useState } from "react";

const PlayerStats = (props) => {
  return (
    <div>
      <form>
        <label for="name">Name</label>
        <input type="text" id="name" name="name" />

        <label for="number">Number</label>
        <input type="number" id="number" name="number" />

        <label for="lname">Position</label>
        <select name="cars" id="cars">
          <option value="volvo">Pitcher</option>
          <option value="saab">Catcher</option>
          <option value="mercedes">1st Base</option>
          <option value="audi">2nd Base</option>
          <option value="volvo">3rd Base</option>
          <option value="saab">Left-Field</option>
          <option value="mercedes">Center-Field</option>
          <option value="audi">Right-Field</option>
          <option value="audi">Shortstop</option>
        </select>

        <label for="lname">Rank</label>
        <select name="cars" id="cars">
          <option value="volvo">None</option>
          <option value="saab">Rookie</option>
          <option value="mercedes">MVP</option>
        </select>
      </form>
    </div>
  );
};

export default PlayerStats;
