import React, { Component } from "react";
import Navlinks from "./navlinks";
import Collapsemenu from "./collapsemenu";
import Menubutton from "./menubutton";
import Navlogo from "./navlogo";
import "./navbar.css";

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };
  }

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  render() {
    return (
      <div className="navbar">
        <nav>
          <Navlogo />
          <Menubutton toggleMenu={this.toggleMenu} />
          <Navlinks />
        </nav>
        <Collapsemenu showMenu={this.state.showMenu} />
      </div>
    );
  }
}

export default Navbar;
