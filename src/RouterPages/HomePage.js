import React, { Component } from "react";

import "../App.css";
import Navbar from "../components/NavBar/NavBar";

import SideBar from "../components/SlideBar/sideBar";
import Banner from "../components/Banner/Banner";
import About from "../components/About/About";
import { AboutInfo, Anncounment } from "../components/About/infoAbout";
import { DisplayList, DisplayH1 } from "../components/Teams/TeamMainStyled";
import ButtonRouterLink from "../components/ReactRouterBtn/ButtonRouterLink";
import TeamCoursels from "../components/TeamCoursel/TeamCoursels";
import Footers from "../components/Footer/Footers";
import Cards from "../components/Cards/CardComponent";

class HomePage extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <SideBar isOpen={this.state.isOpen} toggle={this.toggle} />
        <Navbar toggle={this.toggle} />
        <Banner />
        <About {...AboutInfo} />
        <About {...Anncounment} />
        <DisplayList id="team">
          <DisplayH1> CORE TEAM 2020-2021</DisplayH1>
        </DisplayList>
        <TeamCoursels />
        <DisplayList>
          <ButtonRouterLink gotoPage={"/Team"} textdes={"VIEW"} />
        </DisplayList>
        <div
          style={{ padding: "20px", color: "#0de1b0", background: "#0de1b0" }}
        >
          card
        </div>
        <div style={{ background: "#0de1b0" }}>
          <Cards />
        </div>
        <Footers />
      </>
    );
  }
}

export default HomePage;
