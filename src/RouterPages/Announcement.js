import React, { Component } from "react";
import Navbar from "../components/NavBar/NavBar";
import SideBar from "../components/SlideBar/sideBar";
import Footers from "../components/Footer/Footers";
import News from "../components/Accounce/new";

class Annoument extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <SideBar isOpen={this.state.isOpen} toggle={this.toggle} show={false} />
        <Navbar toggle={this.toggle} show={false} />
        <News />
        <div>
          <Footers />
        </div>
      </>
    );
  }
}
export default Annoument;
