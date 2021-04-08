import { useState } from "react";
import Uploader from "./Uploader/Uploader";
import deviledEggLogo from "./Uploader/teamLogos/1.png";
import ATGALogo from "./Uploader/teamLogos/2.jpg";

import "./App.sass";

import logo from "./strikeOutLogo.png";

const App = () => {
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


  const [playerTeam, setTeam] = useState("");
  const [playerNumber, setNumber] = useState("");
  const [playerName, setName] = useState("");
  return (
    <div className="App">
      <img src={logo} alt="StrikeOut Logo" />
      <h1>Summer Classics Card Creator</h1>
      <Uploader
        checkTeam={playerTeam}
        teamList={teamList}
        changeTeam={setTeam}
        changeNumber={setNumber}
        changeName={setName}
      />
      {playerName} #{playerNumber} on the {playerTeam}
    </div>
  );
};

export default App;
