import React, { Component } from "react";
import Navbar from "../components/NavBar/NavBar";
import SideBar from "../components/SlideBar/sideBar";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import { AboutInfo } from "../components/About/infoAbout";
import Footers from "../components/Footer/Footers";
import InfoSectionArea from "../INFOSECTION/InfoSectionArea";
import EventCardGrids from "../components/EventCardGrids/EventCardGrids";
import CardComponent from "../components/Cards/CardComponent";
import TestTimonialCardComponent from "../components/TestTimonials/TestTimonialCard";
import Speakers from "../components/Speakers/Speakers";

class HomePage extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <SideBar isOpen={this.state.isOpen} toggle={this.toggle} show={true} />
        <Navbar toggle={this.toggle} show={true} />
        <Banner />
        <About {...AboutInfo} />
        <InfoSectionArea />
        <Speakers />
        <EventCardGrids />
        <CardComponent />
        <TestTimonialCardComponent />
        <div>
          <Footers />
        </div>
      </>
    );
  }
}
export default HomePage;
