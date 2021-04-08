import React, { useRef, useEffect } from "react";

const SelectTeam = (props) => {
  useEffect(() => {
    if (props.checkTeam !== "") {
      selectRef.current.options.selectedIndex =
        props.teamList.findIndex((item) => item.name === props.checkTeam) + 1;
    }
  });

  const selectRef = useRef(null);

  function changeTeam() {
    if (selectRef.current.options.selectedIndex !== 0) {
      props.changeTeam(
        props.teamList[selectRef.current.options.selectedIndex - 1].name
      );
    } else {
      props.changeTeam("");
    }
  }

  return (
    <select id="pet-select" ref={selectRef} onChange={changeTeam}>
      <option value="">--Please choose an option--</option>
      {props.teamList.map((item) => {
        return (
          <option value={item.key} key={item.key}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};

export default SelectTeam;
