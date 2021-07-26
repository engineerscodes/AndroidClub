import React from "react";
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SibeBarLink,
  SibeBarLinkRouter,
} from "./sideBarStyle";

const SideBar = (props) => {
  function homeDisplayAction() {
    if (props.show === "true") {
      return (
        <SibeBarLink to="home" onClick={props.toggle}>
          HOME
        </SibeBarLink>
      );
    } else {
      return (
        <SibeBarLinkRouter to="/AndroidClub" onClick={props.toggle}>
          HOME
        </SibeBarLinkRouter>
      );
    }
  }

  return (
    <div>
      <SideBarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            {homeDisplayAction()}
            <SibeBarLinkRouter to="/Events" onClick={props.toggle}>
              EVENTS
            </SibeBarLinkRouter>
            <SibeBarLinkRouter to="/Team" onClick={props.toggle}>
              TEAM
            </SibeBarLinkRouter>
            <SibeBarLinkRouter to="/ANNOUNCEMENT" onClick={props.toggle}>
              ANNOUNCEMENT
            </SibeBarLinkRouter>
            <SibeBarLink to="contact" onClick={props.toggle}>
              CONTACT
            </SibeBarLink>
          </SideBarMenu>
        </SideBarWrapper>
      </SideBarContainer>
    </div>
  );
};

export default SideBar;
