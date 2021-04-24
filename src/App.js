import { useState } from "react";
import Uploader from "./Uploader/Uploader";
import CardOutput from "./CardOutput/Canvas";
import teamList from "./teamList";

import "./App.sass";

import logo from "./strikeOutLogo.png";

const App = () => {
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
  const [cardWidth] = useState(625 / 1.5);
  const [cardHeight] = useState(875 / 1.5);
  const [zoomAmt, changeZoom] = useState(1);
  const [leftCrop, changeLeftCrop] = useState(0);
  const [topCrop, changeTopCrop] = useState(0);
  const [zoomCircleAmt, changeCircleZoom] = useState(1);
  const [leftCircleCrop, changeCircleLeftCrop] = useState(0);
  const [topCircleCrop, changeCircleTopCrop] = useState(0);

  const display = function () {
    if (checkFinish) {
      return (
        <CardOutput
          playerName={playerName}
          playerNumber={playerNumber}
          playerPosition={playerPosition}
          playerTeam={teamList[playerTeam].name}
          playerImg={cardImage}
          teamImg={teamList[playerTeam].logo}
          cardColor={teamList[playerTeam].color}
          seccardColor={teamList[playerTeam].colorTwo}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          zoomAmt={zoomAmt}
          leftCrop={leftCrop}
          topCrop={topCrop}
          rank={playerRank}
          teamtype={teamList[playerTeam].teamType.toUpperCase()}
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
          cardHeight={cardHeight}
          cardWidth={cardWidth}
          zoomAmt={zoomAmt}
          leftCrop={leftCrop}
          topCrop={topCrop}
          changeZoom={changeZoom}
          changeLeftCrop={changeLeftCrop}
          changeTopCrop={changeTopCrop}
          zoomCircleAmt={zoomCircleAmt}
          leftCircleCrop={leftCircleCrop}
          topCircleCrop={topCircleCrop}
          changeCircleZoom={changeCircleZoom}
          changeCircleLeftCrop={changeCircleLeftCrop}
          changeCircleTopCrop={changeCircleTopCrop}
        />
      );
    }
  };

  return (
    <div className="App">
      <img id="logo" src={logo} alt="StrikeOut Logo" />
      <h1>Summer Classics Card Creator</h1>
      {display()}
      <a
        id="strikeLink"
        href="https://twitter.com/gyangufaito/status/1347286890152648704"
      >
        Read StrikeOut every Wednesday!
      </a>
    </div>
  );
};

export default App;
