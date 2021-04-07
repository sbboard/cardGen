import { useState } from "react";
import Uploader from "./Uploader/Uploader";

import "./App.sass";

import logo from "./strikeOutLogo.png";

const App = () => {
  const [playerTeam, setTeam] = useState("");
  const [playerNumber, setNumber] = useState("");
  const [playerName, setName] = useState("");
  return (
    <div className="App">
      <img src={logo} alt="StrikeOut Logo" />
      <h1>Summer Classics Card Creator</h1>
      <Uploader
        changeTeam={setTeam}
        changeNumber={setNumber}
        changeName={setName}
      />
      {playerName} #{playerNumber} on the {playerTeam}
    </div>
  );
};

export default App;
