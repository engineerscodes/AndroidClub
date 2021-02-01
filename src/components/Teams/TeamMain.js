<<<<<<< HEAD
import { DisplayList, DisplayH1, Teamgrid } from "./TeamMainStyled";
import Teams from "./Teams";

import ButtonRouterLink from "../ReactRouterBtn/ButtonRouterLink";

import React, { Component } from "react";

class TeamMain extends Component {
  render() {
    return (
      <>
        <DisplayList id="team">
          <DisplayH1> CORE TEAM 2020-2021 </DisplayH1>
        </DisplayList>
        <DisplayList>
          <Teamgrid>
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
            <Teams />
          </Teamgrid>
        </DisplayList>

        <DisplayList>
          <ButtonRouterLink gotoPage={"/AndroidClub"} textdes={"Home"} />
        </DisplayList>
      </>
    );
  }
}
=======
import {DisplayList,DisplayH1,Teamgrid} from './TeamMainStyled'
import Teams from './Teams'

import  ButtonRouterLink from '../ReactRouterBtn/ButtonRouterLink'

import React ,{Component} from 'react';


class TeamMain extends Component 
{    
  

   render(){
   return ( 

    <>  
         
        
    <DisplayList id='team'>
      
      <DisplayH1> CORE TEAM 2020-2021 </DisplayH1>
      </DisplayList>
      <DisplayList >
      <Teamgrid  >
      <Teams/>
      <Teams/>
      <Teams/>
      <Teams/>
      <Teams/>
      <Teams/>
      <Teams/>
      <Teams/>
      <Teams/>
      </Teamgrid>
      </DisplayList>
      
      <DisplayList>
      <ButtonRouterLink gotoPage={"/AndroidClub"} textdes={"Home"}/>
     </DisplayList> 
      </> 

   );
   }}
>>>>>>> 0c46dab8e28787e51dc70cbb9c6ec25ddb50ea6e

export default TeamMain;


