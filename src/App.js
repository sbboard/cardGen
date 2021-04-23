import { useState } from "react";
import Uploader from "./Uploader/Uploader";
import CardOutput from "./CardOutput/Canvas";
import ggLogo from "./Uploader/teamLogos/gglogo2.png";
import bcLogo from "./Uploader/teamLogos/bcaps.png";
import kappaLogo from "./Uploader/teamLogos/kappa.png";
import starLogo from "./Uploader/teamLogos/starc4.png";
import ninjaLogo from "./Uploader/teamLogos/RN.png";
import heartLogo from "./Uploader/teamLogos/HR.png";
import bellLogo from "./Uploader/teamLogos/HB.png";

import "./App.sass";

import logo from "./strikeOutLogo.png";

const App = () => {
  const teamList = [
    // {
    //   name: "All-Time Greatest All-Stars",
    //   logo: ATGALogo,
    //   color: "FC9B00",
    //   colorTwo: "0086DD",
    //   SpSpName: "SpSpName",
    //   SpSpDesc: "desc",
    //   key: "ATGAS",
    //   teamType: "all-star 40 man roster team"
    // },
    {
      name: "Bottle Caps",
      logo: bcLogo,
      color: "DC5368",
      colorTwo: "5A83B4",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "BC",
      teamType: "all-star 40 man roster team"
    },
    {
      name: "The GG's",
      logo: ggLogo,
      color: "8FB328",
      colorTwo: "3F2C8B",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "GG",
      teamType: "world series qualifiers"
    },
    {
      name: "Killer Kappas",
      logo: kappaLogo,
      color: "4F65A3",
      colorTwo: "65A34D",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "KK",
      teamType: "world series qualifiers"
    },
    {
      name: "Star Children",
      logo: starLogo,
      color: "FFD600",
      colorTwo: "FFB700",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "SC",
      teamType: "world series qualifiers"
    },
    {
      name: "Metal Ninjas",
      logo: ninjaLogo,
      color: "54ABD5",
      colorTwo: "80F5FF",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "MN",
      teamType: "world series qualifiers"
    },
    {
      name: "Hopeless Romantics",
      logo: heartLogo,
      color: "FF3B6E",
      colorTwo: "545454",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "HR",
      teamType: "all-star 40 man roster team"
    },
    {
      name: "Hell's Bells",
      logo: bellLogo,
      color: "FFCB00",
      colorTwo: "FF3C00",
      SpSpName: "SpSpName",
      SpSpDesc: "desc",
      key: "HB",
      teamType: "world series qualifiers"
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
      <a id="strikeLink" href="https://twitter.com/gyangufaito/status/1347286890152648704">Read StrikeOut every Wednesday!</a>
    </div>
  );
};

export default App;
