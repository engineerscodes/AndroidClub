import React from "react";
import {
  FooterConatiner,
  FooterWrap,
  FooterItemConatiner,
  FooterItemsWrapper,
  FooterItems,
  FooterTitle,
  Footertext,
  MediaWraper,
  SocialMediaWrap,
  Logo,
  SICONS,
  SoicalLinks,
  CopyRights,
  FootertextHide,
} from "./FooterStyle";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { SiDiscord, SiGmail } from "react-icons/si";
const Footers = () => {
  return (
    <FooterConatiner id="contact">
      <FooterWrap>
        <FooterItemConatiner>
          <FooterItemsWrapper>
            <FooterItems>
              <FooterTitle>About Us </FooterTitle>
              <Footertext
                to={{ pathname: "https://vitap.ac.in/android-club-2/" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                VIT-AP
              </Footertext>
              <Footertext
                to={{ pathname: "https://discord.gg/X4wHTzk" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Discord Server
              </Footertext>
              <Footertext
                to={{
                  pathname: "https://www.instagram.com/androidclubvitap/?hl=en",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Instagram
              </Footertext>
            </FooterItems>

            <FooterItems>
              <FooterTitle>Contact Us </FooterTitle>
              <Footertext
                to={{
                  pathname:
                    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mknaveen837@gmail.com",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Gmail
              </Footertext>
              <Footertext
                to={{
                  pathname:
                    "https://www.linkedin.com/company/android-club-vit-ap",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                LinKedIn{" "}
              </Footertext>
              <Footertext
                to={{ pathname: "https://github.com/Android-Club-VITAP" }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                GITHUB{" "}
              </Footertext>
            </FooterItems>
          </FooterItemsWrapper>

          <FooterItemsWrapper>
            <FooterItems>
              <FooterTitle>Projects </FooterTitle>
              <Footertext
                to={{
                  pathname:
                    "https://github.com/Android-Club-VITAP/VTOP-Extended",
                }}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                VTOP-Extended
              </Footertext>
              <FootertextHide to="/AndroidClub">Vit </FootertextHide>
              <FootertextHide to="/AndroidClub"> Vit </FootertextHide>
            </FooterItems>

            <FooterItems>
              <FooterTitle> Blogs </FooterTitle>
              <Footertext to="/AndroidClub"> Coming soon...</Footertext>
              <Footertext to="/AndroidClub"> Coming soon...</Footertext>
              <Footertext to="/AndroidClub"> Coming soon...</Footertext>
            </FooterItems>
          </FooterItemsWrapper>
        </FooterItemConatiner>

        <MediaWraper>
          <SocialMediaWrap>
            <Logo to="banner"> android club vitap </Logo>

            <SICONS>
              <SoicalLinks
                href="//www.instagram.com/androidclubvitap/?hl=en"
                target="_blank"
                aria-label="Instagram"
                rel="noreferrer"
              >
                {" "}
                <FaInstagram />{" "}
              </SoicalLinks>
              <SoicalLinks
                href="//discord.gg/X4wHTzk"
                target="_blank"
                aria-label="Discord"
                rel="noreferrer"
              >
                {" "}
                <SiDiscord />{" "}
              </SoicalLinks>
              <SoicalLinks
                href="//github.com/Android-Club-VITAP"
                target="_blank"
                aria-label="GitHub"
                rel="noreferrer"
              >
                {" "}
                <FaGithub />{" "}
              </SoicalLinks>
              <SoicalLinks
                href="//mail.google.com/mail/?view=cm&fs=1&tf=1&to=mknaveen837@gmail.com"
                target="_blank"
                aria-label="G-mail"
                rel="noreferrer"
              >
                {" "}
                <SiGmail />{" "}
              </SoicalLinks>
            </SICONS>
          </SocialMediaWrap>
        </MediaWraper>
        <CopyRights>
          Copyright © {new Date().getFullYear()} All rights reserved | Android
          Club Vitap |
        </CopyRights>
      </FooterWrap>
    </FooterConatiner>
  );
};

export default Footers;
