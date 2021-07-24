import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavLinksRouter,
} from "./NavBarStyle";

import { FaBars } from "react-icons/fa";

let greengb = "true";
const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/AndroidClub">ANDROID CLUB</NavLogo>

          <MobileIcon onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={80}
                boderbg={greengb}
                ishinden={props.show}
              >
                HOME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksRouter
                to="/Events"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                EVENTS
              </NavLinksRouter>
            </NavItem>
            <NavItem>
              <NavLinksRouter
                to="/Team"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                TEAM
              </NavLinksRouter>
            </NavItem>

            <NavItem>
              <NavLinksRouter
                to="/ANNOUNCEMENT"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                ANNOUNCEMENT
              </NavLinksRouter>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                boderbg={greengb}
                ishinden={"true"}
              >
                CONTACT
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
