import React, { useRef } from "react";
import deviledEggLogo from "./teamLogos/1.png";
import ATGALogo from "./teamLogos/2.jpg";

const SelectTeam = (props) => {
  const selectRef = useRef(null);

  const teamList = [
    {
      name: "Deviled Eggs",
      logo: deviledEggLogo,
      color: "#000",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "DE",
    },
    {
      name: "All-Time Greatest All-Stars",
      logo: ATGALogo,
      color: "#fff",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "ATGAS",
    },
  ];

  function changeTeam() {
    //console.log(selectRef.current.options.selectedIndex)
    if (selectRef.current.options.selectedIndex !== 0) {
      props.changeTeam(teamList[selectRef.current.options.selectedIndex - 1].name);
    } else {
      props.changeTeam("");
    }
  }

  return (
    <select id="pet-select" ref={selectRef} onChange={changeTeam}>
      <option value="">--Please choose an option--</option>
      {teamList.map((item) => {
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
