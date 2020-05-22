import React, { Component } from "react";
import Landing from "./landing/landing";
import Landing2 from "./landing/landing2";
import "./App.css";
import Navbar from "./navbar/navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "landing",
    };
  }
  render() {
    const { route } = this.state;
    return (
      <div className="App">
        <Landing />
        <Navbar />
      </div>
    );
  }
}

export default App;
