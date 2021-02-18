import { Component } from "react";
import "./App.css";
import Uploader from "./Home/Uploader";

class App extends Component {
  state = {
    counter: 5,
  };

  plusOne = () => {
    this.setState({counter: this.state.counter + 1})
  };

  render() {
    let peenDog = "peen";

    return (
      <div className="App">
        <h1>
          Hi, {peenDog}. {this.state.counter}
        </h1>
        <Uploader name="test" />
        <button onClick={this.plusOne}></button>
      </div>
    );
  }
}

export default App;
