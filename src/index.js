import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class App extends Component {
  state = {
    showList: false
  };

  switch = () => {
    this.setState(prevState => ({
      showList: !prevState.showList
    }));
  };

  render() {
    return (
      <div className="container">
        <button className="display" onClick={this.switch}>
          List
        </button>
        {this.state.showList && (
          <div className="menu">
            <ul className="list">
              <li className="list-item">Feed the dog</li>
              <li className="list-item">Cut hair</li>
              <li className="list-item">Do the dishs</li>
              <li className="list-item">Buy grossries</li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
