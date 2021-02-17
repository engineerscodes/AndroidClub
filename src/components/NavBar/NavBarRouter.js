import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinksA,
} from "./NavBarStyle";

import { FaBars } from "react-icons/fa";

let greengb = "true";
let whitebg = "false";

const NavbarRouter = (props) => {
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
              <NavLinksA
                href="/AndroidClub"
                exact="true"
                offset={80}
                boderbg={greengb}
              >
                HOME
              </NavLinksA>
            </NavItem>
            <NavItem>
              <NavLinksA
                href="/AndroidClub#event"
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                EVENTS
              </NavLinksA>
            </NavItem>
            <NavItem>
              <NavLinksA
                href="/Team"
                duration={500}
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                TEAM
              </NavLinksA>
            </NavItem>

            <NavItem>
              <NavLinksA
                href="/AndroidClub#announcement"
                exact="true"
                offset={-80}
                boderbg={whitebg}
              >
                ANNOUNCEMENT
              </NavLinksA>
            </NavItem>
            <NavItem>
              <NavLinksA
                href="/AndroidClub#contact"
                exact="true"
                offset={-80}
                boderbg={greengb}
              >
                CONTACT
              </NavLinksA>
            </NavItem>
          </NavMenu>
        </NavBarContainer>
      </Nav>
    </>
  );
};

export default NavbarRouter;
