import React, { Component } from "react";
import "./navlinks.css";

class Navlinks extends Component {
  render() {
    return (
      <ul className="nav_links">
        <li className="nav_link">
          <a href="#">Home</a>
        </li>
        <li className="nav_link">
          <a href="#">Gallery</a>
        </li>
        <li className="nav_link">
          <a href="#">Shop</a>
        </li>
        <li className="nav_link">
          <a href="#">Blog</a>
        </li>
        <li className="nav_link">
          <a href="#">About</a>
        </li>
        <li className="nav_link">
          <a href="#">Team</a>
        </li>
        <li className="nav_link">
          <a href="#">Contact</a>
        </li>
      </ul>
    );
  }
}

export default Navlinks;
