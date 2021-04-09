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

  const [playerTeam, setTeam] = useState(null);
  const [playerNumber, setNumber] = useState(null);
  const [playerName, setName] = useState(null);
  const [cardImage, changeImg] = useState(null);
  const [playerRank, changeRank] = useState(null);
  const [playerPosition, changePosition] = useState(null);
  const [SpSpName, setSpName] = useState("None");
  const [SpSp, setSp] = useState("None");
  const [funFact, setFact] = useState(null)

  return (
    <div className="App">
      <img src={logo} alt="StrikeOut Logo" />
      <h1>Summer Classics Card Creator</h1>
      <Uploader
        checkTeam={playerTeam}
        teamList={teamList}
        checkName={playerName}
        checkNumber={playerNumber}
        changeTeam={setTeam}
        changeNumber={setNumber}
        changeName={setName}
        checkImg={cardImage}
        changeImg={changeImg}
        checkPosition={playerPosition}
        changeRank={changeRank}
        changePosition={changePosition}
        setSpName={setSpName}
        setSp={setSp}
        checkFact={funFact}
        setFact={setFact}
      />
      {playerName} #{playerNumber} on the {playerTeam}
      <img src={cardImage} alt="dd" />
    </div>
  );
};

export default App;
