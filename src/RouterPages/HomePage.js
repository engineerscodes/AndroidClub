import React ,{Component} from 'react';

import '../App.css';
import Navbar from '../components/NavBar/NavBar';

import SideBar from '../components/SlideBar/sideBar';
import Banner from '../components/Banner/Banner'
import About from '../components/About/About';
import {AboutInfo,Anncounment} from '../components/About/infoAbout'

import {DisplayList,DisplayH1} from '../components/Teams/TeamMainStyled'

import   ButtonRouterLink from "../components/ReactRouterBtn/ButtonRouterLink";
import TeamCoursels from '../components/TeamCoursel/TeamCoursels';
import Footers from '../components/Footer/Footers';
import { InputData } from '../components/TeamCoursel/InputData';

class HomePage extends Component 
 {  
    state ={ isOpen :false}

  toggle =()=>{
    this.setState({isOpen :!(this.state.isOpen)});
  } 
    
    
    render(){
    return (
        <>
      <SideBar isOpen={this.state.isOpen} toggle ={this.toggle}/>
      <Navbar toggle ={this.toggle}/>
      <Banner/>
      <About {...AboutInfo}/>
      <About {...Anncounment}/>
      <DisplayList  id='team'>
           
           <DisplayH1> CORE TEAM 2020-2021 </DisplayH1>
       </DisplayList >
         
           
      
        <TeamCoursels  slides={InputData}/>
      

     <DisplayList>
            
            <ButtonRouterLink gotoPage={'/Team'} textdes={ "VIEW" }/>
      </DisplayList>
          
         <Footers/>
        </>
    )
 }
}

export default HomePage;
