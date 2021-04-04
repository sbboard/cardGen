import { Component } from "react";
import Uploader from "./Uploader/Uploader";

import "./App.sass";

import logo from './strikeOutLogo.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} alt="StrikeOut Logo" />
        <h1>Summer Classics Card Creator</h1>
        <Uploader/>
        {/* preview */}
        {/* save */}
      </div>
    );
  }
}

export default App;
