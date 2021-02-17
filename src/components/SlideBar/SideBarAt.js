
import React from "react";
import {
  SideBarContainer,
  CloseIcon,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SibeBarLinkRouter,
  SibeBarLinkA,
} from "./sideBarStyle";

const SideBarAt = (props) => {
  return (
    <div>
      <SideBarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SibeBarLinkA href="/AndroidClub" onClick={props.toggle}>
              HOME
            </SibeBarLinkA>
            <SibeBarLinkA href="/AndroidClub#event" onClick={props.toggle}>
              EVENT'S
            </SibeBarLinkA>
            <SibeBarLinkRouter to="/Team" onClick={props.toggle}>
              TEAM
            </SibeBarLinkRouter>
            <SibeBarLinkA
              href="/AndroidClub#announcement"
              onClick={props.toggle}
            >
              ANNOUNCEMENT
            </SibeBarLinkA>
            <SibeBarLinkA href="/AndroidClub#contact"  onClick={props.toggle}>
              CONTACT
            </SibeBarLinkA>
          </SideBarMenu>
        </SideBarWrapper>
      </SideBarContainer>
    </div>
  );
};

export default SideBarAt;
