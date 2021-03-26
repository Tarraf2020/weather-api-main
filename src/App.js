import React, { Component } from "react";
import Search from "./components/Search";
import WeatherFetch from "./weatherFetch";

import "./App.css";



class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: "London"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Search handleInput={this.handleInputChange} />
        </div>
        <div className="app__main">
          <div className="all">
          <WeatherFetch name1 ={this.state.name}/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;