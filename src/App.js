import { Component } from "react";
import Uploader from "./Uploader/Uploader";

import "./App.sass";

import logo from './strikeOutLogo.png'

class App extends Component {
  state = {
    counter: 5,
  };

  plusOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    let peenDog = "peen";

    return (
      <div className="App">
        <img src={logo} alt="StrikeOut Logo" />
        <h1>Summer Classics Card Creator</h1>
        {/* <h1>
          Hi, {peenDog}. {this.state.counter}
        </h1> */}
        <Uploader/>
        {/* <button onClick={this.plusOne}></button> */}
      </div>
    );
  }
}

export default App;
