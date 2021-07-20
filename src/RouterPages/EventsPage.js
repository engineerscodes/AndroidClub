import React, { Component } from "react";

import Navbar from "../components/NavBar/NavBar";

import SideBar from "../components/SlideBar/sideBar";
import Footers from "../components/Footer/Footers";
import Events from '../components/EventsList/EventList';

class EventsPage extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <SideBar isOpen={this.state.isOpen} toggle={this.toggle} />
        <Navbar toggle={this.toggle} />
         <Events/>
        <div>

          <Footers />
        </div>
      </>
    );
  }
}
export default EventsPage;
