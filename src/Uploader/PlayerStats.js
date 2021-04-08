// import { useState } from "react";
import React, { useRef } from "react";

const PlayerStats = (props) => {
  const nameInput = useRef(null);
  const numberInput = useRef(null);

  function changeName() {
    props.changeName(nameInput.current.value);
  }
  function changeNumber() {
    props.changeNumber(numberInput.current.value);
  }
  
  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          ref={nameInput}
          id="name"
          name="name"
          onKeyUp={changeName}
        />

        <label htmlFor="number">Number</label>
        <input
          ref={numberInput}
          type="number"
          id="number"
          name="number"
          onChange={changeNumber}
        />

        <label htmlFor="lname">Position</label>
        <select name="cars" id="cars">
          <option>Pitcher</option>
          <option>Catcher</option>
          <option>1st Base</option>
          <option>2nd Base</option>
          <option>3rd Base</option>
          <option>Left-Field</option>
          <option>Center-Field</option>
          <option>Right-Field</option>
          <option>Shortstop</option>
        </select>

        <label htmlFor="lname">Rank</label>
        <select name="cars" id="cars">
          <option>None</option>
          <option>Rookie</option>
          <option>MVP</option>
        </select>
      </form>
    </div>
  );
};

export default PlayerStats;
