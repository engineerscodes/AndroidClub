//import react from 'react'
//import { Link } from 'react-router-dom'
//import * as RB from 'react-bootstrap'
import {Nav,NavBarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks ,NavLinksRouter} from './NavBarStyle'

import {FaBars} from 'react-icons/fa'

let greengb='true';
let whitebg='false';

const Navbar =(props)=>{ return ( 
<>  
  <Nav>
    <NavBarContainer>
        <NavLogo to='/AndroidClub'>
        
          ANDROID CLUB
           
        </NavLogo>

        <MobileIcon onClick={props.toggle}>
          <FaBars/>
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks  to='home' 
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={80}
            boderbg={greengb}
            
            >HOME</NavLinks> 
            </NavItem>
          <NavItem>
            <NavLinks to='event'
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          >EVENTS</NavLinks></NavItem>
          <NavItem><NavLinksRouter to='/Team'
            duration={500}
            exact="true"
            offset={-80}
            boderbg={greengb}
          
          >TEAM</NavLinksRouter></NavItem> 
          
          <NavItem><NavLinks to='announcement' smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            boderbg={whitebg}
          >ANNOUNCEMENT</NavLinks></NavItem>
          <NavItem><NavLinks to='contact'  
          smooth={true}
          duration={500}
          spy={true}
          exact="true"
          offset={-80}
          boderbg={greengb}
          
          >CONTACT</NavLinks></NavItem>
        </NavMenu>
    </NavBarContainer>
  </Nav>
</>
  );
}

export default Navbar;


