import React from 'react'
import Footers from '../components/Footer/Footers.js';
import NavbarRouter from '../components/NavBar/NavBarRouter.js';


import TeamMain from "../components/Teams/TeamMain";
const TeamPage = () => {
    return (
        <>
             <NavbarRouter/>
             <TeamMain/>
             <Footers/>
        </>
    )
}

export default TeamPage;
