import React, { Component } from "react";
import Search from "./components/Search";
import FakeWeather from "./data/FakeWeather.json";

import "./App.css";

import fog from "./img/weather-icons/fog.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import unknown from "./img/weather-icons/unknown.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";

class Fog extends Component {
  render() {
    return (
      <div>
        <img src={fog} alt="fog icon" />
      </div>
    );
  }
}
class Rain extends Component {
  render() {
    return (
      <div>
        <img src={rain} alt="fog rain" />
      </div>
    );
  }
}
class Snow extends Component {
  render() {
    return (
      <div>
        <img src={snow} alt="snow rain" />
      </div>
    );
  }
}
class Storm extends Component {
  render() {
    return (
      <div>
        <img src={storm} alt="storm rain" />
      </div>
    );
  }
}
class Clear extends Component {
  render() {
    return (
      <div>
        <img src={clear} alt="clear icon" />
      </div>
    );
  }
}
class Cloudy extends Component {
  render() {
    return (
      <div>
        <img src={cloudy} alt="cloudy icon" />
      </div>
    );
  }
}
class Unknown extends Component {
  render() {
    return (
      <div>
        <img src={unknown} alt="unknown icon" />
      </div>
    );
  }
}
class Drizzle extends Component {
  render() {
    return (
      <div>
        <img src={drizzle} alt="drizzle icon" />
      </div>
    );
  }
}
class Mostlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={mostlycloudy} alt="mostlycloudy icon" />
      </div>
    );
  }
}
class Partlycloudy extends Component {
  render() {
    return (
      <div>
        <img src={partlycloudy} alt="partlycloudy icon" />
      </div>
    );
  }
}




class Laterr extends Component {
  render() {
    var i=0;
    var arr =[];
    
    for(var j=i+1; j<=i+7;j++){
      var m;
      if(FakeWeather.list[j].weather[0].main === 'Clear' ){
        m=<Clear />
      }else if(FakeWeather.list[j].weather[0].main === 'Clouds' ){
        m=<Cloudy/>
      }else if(FakeWeather.list[j].weather[0].main === 'Rain' ){
        m=<Rain/>
      }
     arr.push(
        <div className="later id1">
          <h4>{FakeWeather.list[j].dt_txt.substring(10,16)}</h4>
            {m}
          <h4>{FakeWeather.list[j].main.temp} F</h4>
        </div>
     )
      }
    return (
      <div>
      <div className="now">
        <img src={mostlycloudy} alt="mostlycloudy icon" />
        <p className="p0">{FakeWeather.list[i].weather[0].description}</p>
        <p className="p1"><span>Temperature</span> {FakeWeather.list[i].main.temp_min} to {FakeWeather.list[i].main.temp_max}</p>
        <p className="p2"><span>Humidity</span> {FakeWeather.list[i].main.humidity} <span>Pressure</span> {FakeWeather.list[i].main.pressure}</p>
      </div>

      <div className="laters">
        {arr};
      </div>
      </div>
    );
  }
}



class App extends Component {
  

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
            <Laterr />
          </div>

        </div>

      </div>
    );
  }
}

export default App;