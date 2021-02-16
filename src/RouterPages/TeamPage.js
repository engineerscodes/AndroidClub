import React from 'react'
import Footers from '../components/Footer/Footers.js';
import Navbar from '../components/NavBar/NavBar.js';

import TeamMain from "../components/Teams/TeamMain";
const TeamPage = () => {
    return (
        <>
             <Navbar/>
             <TeamMain/>
             <Footers/>
        </>
    )
}

export default TeamPage;
