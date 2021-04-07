//import { useState } from "react";
import deviledEggLogo from "./teamLogos/1.png";
import ATGALogo from "./teamLogos/2.jpg";

const SelectTeam = (props) => {
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
    props.changeTeam("test");
  }

  return (
    <select id="pet-select" onChange={changeTeam}>
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
