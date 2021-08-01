import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Event from "./RouterPages/EventsPage";
import HomePage from "./RouterPages/HomePage";
import ScrollToTop from "./components/ScrollToTop";
import TeamPage from "./RouterPages/TeamPage";
import Announcement from "./RouterPages/Announcement";
import NotFound from "./RouterPages/NotFound404";
class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <div className="App">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/AndroidClub" component={HomePage} exact />
            <Route path="/AndroidClub/Team" component={TeamPage} />
            <Route path="/AndroidClub/Events" component={Event} />
            <Route path="/AndroidClub/ANNOUNCEMENT" component={Announcement} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
