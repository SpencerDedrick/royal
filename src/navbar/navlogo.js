import React, { Component } from "react";
import "./navlogo.css";

class Navlogo extends Component {
  render() {
    return (
      <div className="nav_logo">
        <a href="#" className="home_button">
          Royal
        </a>
        <a href="#" className="nav_logo_link">
          Royal Home Page
        </a>
      </div>
    );
  }
}

export default Navlogo;
