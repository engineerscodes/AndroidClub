import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from "./RouterPages/EventsPage";
import HomePage from "./RouterPages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import TeamPage from "./RouterPages/TeamPage";
import Announcement from "./RouterPages/Announcement";
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Switch>
            <Route path="/AndroidClub" component={HomePage} exact />
            <Route path="/AndroidClub/Team" component={TeamPage} />
            <Route path="/AndroidClub/Events" component={Event} />
            <Route path="/AndroidClub/ANNOUNCEMENT" component={Announcement} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
