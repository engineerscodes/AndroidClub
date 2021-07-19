import React, { Component } from "react";
import Footers from '../components/Footer/Footers.js';
//import NavbarRouter from '../components/NavBar/NavBarRouter.js';
import SideBarAt from "../components/SlideBar/SideBarAt";
import Navbar from '../components/NavBar/NavBar'
import TeamMain from "../components/Teams/TeamMain";
class TeamPage extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <>
        <SideBarAt isOpen={this.state.isOpen} toggle={this.toggle} />
        <Navbar toggle={this.toggle} />
        <TeamMain />
        <Footers />
      </>
    );
  }
}
export default TeamPage;
