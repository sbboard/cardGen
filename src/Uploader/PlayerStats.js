import React, { useRef, useEffect } from "react";

const PlayerStats = (props) => {
  const nameInput = useRef(null);
  const numberInput = useRef(null);
  const rankInput = useRef(null);
  const positionInput = useRef(null);

  useEffect(() => {
    if (props.checkName !== null) {
      nameInput.current.value = props.checkName;
    }
    if (props.checkNumber !== null) {
      numberInput.current.value = props.checkNumber;
    }
    if (props.checkRank !== null) {
      rankInput.current.value = props.checkRank;
    }
    if (props.checkPosition !== null) {
      positionInput.current.value = props.checkPosition;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function changeName() {
    props.changeName(nameInput.current.value);
  }
  function changeNumber() {
    props.changeNumber(numberInput.current.value);
  }

  function changePosition() {
    props.changePosition(positionInput.current.value);
  }

  function changeRank() {
    props.changeRank(rankInput.current.value);
  }

  function doItForMe() {
    let americanNames = [
      "Sleve McDichael",
      "Onson Sweemey",
      "Darryl Archideld",
      "Anette Smorin",
      "Rey McScriff",
      "Glenallen Mixon",
      "Mario McRlwain",
      "Raul Chamgerlain",
      "Kevin Nogilny",
      "Toni Smehrik",
      "Bobson Dugnutt",
      "Willamina Dustice",
      "Jeromy Gride",
      "Scott Dourove",
      "Shawna Furcotte",
      "Dean Wesrey",
      "Mike Truk",
      "Dwigt Rortugal",
      "Tim Sandaele",
      "Karl Dandleton",
      "Mike Sernandez",
      "Todd Bonzalez",
    ];
    nameInput.current.value =
      americanNames[Math.floor(Math.random() * americanNames.length)];
    changeName();
    numberInput.current.value = Math.floor(Math.random() * 60) + 1;
    changeNumber();
    positionInput.current.options.selectedIndex = Math.floor(
      Math.random() * (positionInput.current.options.length - 1) + 1
    );
    changePosition();
    rankInput.current.options.selectedIndex = Math.floor(
      Math.random() * (rankInput.current.options.length - 1) + 1
    );
    changeRank();
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
          maxLength="30"
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
        <select
          name="cars"
          id="cars"
          onChange={changePosition}
          ref={positionInput}
        >
          <option>-- Choose A Position --</option>
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
        <select name="cars" id="cars" onChange={changeRank} ref={rankInput}>
          <option>None</option>
          <option>Rookie</option>
          <option>MVP</option>
        </select>
      </form>
      <button onClick={doItForMe}>Choose For Me</button>
    </div>
  );
};

export default PlayerStats;
