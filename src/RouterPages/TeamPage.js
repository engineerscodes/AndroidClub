import React, { Component } from "react";
import Footers from "../components/Footer/Footers.js";
import SideBar from "../components/SlideBar/sideBar";
import Navbar from "../components/NavBar/NavBar";
import TeamMain from "../components/Teams/TeamMain";
class TeamPage extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <SideBar isOpen={this.state.isOpen} toggle={this.toggle} show={false} />
        <Navbar toggle={this.toggle} show={false} />
        <TeamMain />
        <Footers />
      </>
    );
  }
}
export default TeamPage;
