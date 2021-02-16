import React, { Component } from "react";
import "./App.css";
//import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import SideBar from './components/SlideBar/sideBar';
import Banner from './components/Banner/Banner'
import About from './components/About/About';

import TeamMain from "./components/Teams/TeamMain.js";
import {AboutInfo,Anncounment} from './components/About/infoAbout' */
import EventList from './components/EventsList/EventList'

import HomePage from "./RouterPages/HomePage";



import ScrollToTop from "./components/ScrollToTop";
import TeamPage from "./RouterPages/TeamPage";


class App extends Component 
{  
  
  render(){
  return (
    <Router>
    <ScrollToTop/>
 <div className="App">
 <Switch>
        <Route path='/AndroidClub' component={HomePage} exact/>
        <Route path='/Team' component={TeamPage} />
        <Route path="/Events" component={EventList} />
       </Switch> 
 </div>
 </Router>
  );
  }
}

export default App;

// <HomePage/>
//<TeamMain/>

/**
 *
 *
 *
 */
