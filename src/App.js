import { useState } from "react";
import Uploader from "./Uploader/Uploader";
import CardOutput from "./CardOutput/Canvas";
import deviledEggLogo from "./Uploader/teamLogos/1.png";
import ATGALogo from "./Uploader/teamLogos/2.jpg";

import "./App.sass";

import logo from "./strikeOutLogo.png";

const App = () => {

  const teamList = [
    {
      name: "Deviled Eggs",
      logo: deviledEggLogo,
      color: "green",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "DE",
    },
    {
      name: "All-Time Greatest All-Stars",
      logo: ATGALogo,
      color: "yellow",
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
  const [funFact, setFact] = useState(null);
  const [checkFinish, finishCard] = useState(false);

  const display = function () {
    if (checkFinish) {
      return (
        <CardOutput
          playerName={playerName}
          playerPosition={playerPosition}
          playerTeam={teamList[playerTeam].name}
          playerImg={cardImage}
          teamImg={teamList[playerTeam].logo}
          cardColor={teamList[playerTeam].color}
        />
      );
    } else {
      return (
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
          checkRank={playerRank}
          checkSpName={SpSpName}
          checkSpSp={SpSp}
          finishCard={finishCard}
        />
      );
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="StrikeOut Logo" />
      <h1>Summer Classics Card Creator</h1>
      {display()}
    </div>
  );
};

export default App;
